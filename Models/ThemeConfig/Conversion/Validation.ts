import { DesugaringStep, Each, Fuse, On } from "./Conversion"
import { LayerConfigJson } from "../Json/LayerConfigJson"
import LayerConfig from "../LayerConfig"
import { Utils } from "../../../Utils"
import Constants from "../../Constants"
import { Translation } from "../../../UI/i18n/Translation"
import { LayoutConfigJson } from "../Json/LayoutConfigJson"
import LayoutConfig from "../LayoutConfig"
import { TagRenderingConfigJson } from "../Json/TagRenderingConfigJson"
import { TagUtils } from "../../../Logic/Tags/TagUtils"
import { ExtractImages } from "./FixImages"
import ScriptUtils from "../../../scripts/ScriptUtils"
import { And } from "../../../Logic/Tags/And"
import Translations from "../../../UI/i18n/Translations"
import Svg from "../../../Svg"
import { QuestionableTagRenderingConfigJson } from "../Json/QuestionableTagRenderingConfigJson"
import FilterConfigJson from "../Json/FilterConfigJson"
import DeleteConfig from "../DeleteConfig"

class ValidateLanguageCompleteness extends DesugaringStep<any> {
    private readonly _languages: string[]

    constructor(...languages: string[]) {
        super(
            "Checks that the given object is fully translated in the specified languages",
            [],
            "ValidateLanguageCompleteness"
        )
        this._languages = languages ?? ["en"]
    }

    convert(obj: any, context: string): { result: LayerConfig; errors: string[] } {
        const errors = []
        const translations = Translation.ExtractAllTranslationsFrom(obj)
        for (const neededLanguage of this._languages) {
            translations
                .filter(
                    (t) =>
                        t.tr.translations[neededLanguage] === undefined &&
                        t.tr.translations["*"] === undefined
                )
                .forEach((missing) => {
                    errors.push(
                        context +
                            "A theme should be translation-complete for " +
                            neededLanguage +
                            ", but it lacks a translation for " +
                            missing.context +
                            ".\n\tThe known translation is " +
                            missing.tr.textFor("en")
                    )
                })
        }

        return {
            result: obj,
            errors,
        }
    }
}

export class DoesImageExist extends DesugaringStep<string> {
    private readonly _knownImagePaths: Set<string>
    private readonly doesPathExist: (path: string) => boolean = undefined

    constructor(
        knownImagePaths: Set<string>,
        checkExistsSync: (path: string) => boolean = undefined
    ) {
        super("Checks if an image exists", [], "DoesImageExist")
        this._knownImagePaths = knownImagePaths
        this.doesPathExist = checkExistsSync
    }

    convert(
        image: string,
        context: string
    ): { result: string; errors?: string[]; warnings?: string[]; information?: string[] } {
        const errors = []
        const warnings = []
        const information = []
        if (image.indexOf("{") >= 0) {
            information.push("Ignoring image with { in the path: " + image)
            return { result: image }
        }

        if (image === "assets/SocialImage.png") {
            return { result: image }
        }
        if (image.match(/[a-z]*/)) {
            if (Svg.All[image + ".svg"] !== undefined) {
                // This is a builtin img, e.g. 'checkmark' or 'crosshair'
                return { result: image }
            }
        }

        if (!this._knownImagePaths.has(image)) {
            if (this.doesPathExist === undefined) {
                errors.push(
                    `Image with path ${image} not found or not attributed; it is used in ${context}`
                )
            } else if (!this.doesPathExist(image)) {
                errors.push(
                    `Image with path ${image} does not exist; it is used in ${context}.\n     Check for typo's and missing directories in the path.`
                )
            } else {
                errors.push(
                    `Image with path ${image} is not attributed (but it exists); execute 'npm run query:licenses' to add the license information and/or run 'npm run generate:licenses' to compile all the license info`
                )
            }
        }
        return {
            result: image,
            errors,
            warnings,
            information,
        }
    }
}

class ValidateTheme extends DesugaringStep<LayoutConfigJson> {
    /**
     * The paths where this layer is originally saved. Triggers some extra checks
     * @private
     */
    private readonly _path?: string
    private readonly _isBuiltin: boolean
    private _sharedTagRenderings: Map<string, any>
    private readonly _validateImage: DesugaringStep<string>

    constructor(
        doesImageExist: DoesImageExist,
        path: string,
        isBuiltin: boolean,
        sharedTagRenderings: Map<string, any>
    ) {
        super("Doesn't change anything, but emits warnings and errors", [], "ValidateTheme")
        this._validateImage = doesImageExist
        this._path = path
        this._isBuiltin = isBuiltin
        this._sharedTagRenderings = sharedTagRenderings
    }

    convert(
        json: LayoutConfigJson,
        context: string
    ): { result: LayoutConfigJson; errors: string[]; warnings: string[]; information: string[] } {
        const errors = []
        const warnings = []
        const information = []

        const theme = new LayoutConfig(json, this._isBuiltin)

        {
            // Legacy format checks
            if (this._isBuiltin) {
                if (json["units"] !== undefined) {
                    errors.push(
                        "The theme " +
                            json.id +
                            " has units defined - these should be defined on the layer instead. (Hint: use overrideAll: { '+units': ... }) "
                    )
                }
                if (json["roamingRenderings"] !== undefined) {
                    errors.push(
                        "Theme " +
                            json.id +
                            " contains an old 'roamingRenderings'. Use an 'overrideAll' instead"
                    )
                }
            }
        }
        if (this._isBuiltin) {
            // Check images: are they local, are the licenses there, is the theme icon square, ...
            const images = new ExtractImages(
                this._isBuiltin,
                this._sharedTagRenderings
            ).convertStrict(json, "validation")
            const remoteImages = images.filter((img) => img.indexOf("http") == 0)
            for (const remoteImage of remoteImages) {
                errors.push(
                    "Found a remote image: " +
                        remoteImage +
                        " in theme " +
                        json.id +
                        ", please download it."
                )
            }
            for (const image of images) {
                this._validateImage.convertJoin(
                    image,
                    context === undefined ? "" : ` in a layer defined in the theme ${context}`,
                    errors,
                    warnings,
                    information
                )
            }

            if (json.icon.endsWith(".svg")) {
                try {
                    ScriptUtils.ReadSvgSync(json.icon, (svg) => {
                        const width: string = svg.$.width
                        const height: string = svg.$.height
                        if (width !== height) {
                            const e =
                                `the icon for theme ${json.id} is not square. Please square the icon at ${json.icon}` +
                                ` Width = ${width} height = ${height}`
                            ;(json.hideFromOverview ? warnings : errors).push(e)
                        }

                        const w = parseInt(width)
                        const h = parseInt(height)
                        if (w < 370 || h < 370) {
                            const e: string = [
                                `the icon for theme ${json.id} is too small. Please rescale the icon at ${json.icon}`,
                                `Even though an SVG is 'infinitely scaleable', the icon should be dimensioned bigger. One of the build steps of the theme does convert the image to a PNG (to serve as PWA-icon) and having a small dimension will cause blurry images.`,
                                ` Width = ${width} height = ${height}; we recommend a size of at least 500px * 500px and to use a square aspect ratio.`,
                            ].join("\n")
                            ;(json.hideFromOverview ? warnings : errors).push(e)
                        }
                    })
                } catch (e) {
                    console.error("Could not read " + json.icon + " due to " + e)
                }
            }
        }

        try {
            if (this._isBuiltin) {
                if (theme.id !== theme.id.toLowerCase()) {
                    errors.push("Theme ids should be in lowercase, but it is " + theme.id)
                }

                const filename = this._path.substring(
                    this._path.lastIndexOf("/") + 1,
                    this._path.length - 5
                )
                if (theme.id !== filename) {
                    errors.push(
                        "Theme ids should be the same as the name.json, but we got id: " +
                            theme.id +
                            " and filename " +
                            filename +
                            " (" +
                            this._path +
                            ")"
                    )
                }
                this._validateImage.convertJoin(
                    theme.icon,
                    context + ".icon",
                    errors,
                    warnings,
                    information
                )
            }
            const dups = Utils.Dupiclates(json.layers.map((layer) => layer["id"]))
            if (dups.length > 0) {
                errors.push(
                    `The theme ${json.id} defines multiple layers with id ${dups.join(", ")}`
                )
            }
            if (json["mustHaveLanguage"] !== undefined) {
                const checked = new ValidateLanguageCompleteness(
                    ...json["mustHaveLanguage"]
                ).convert(theme, theme.id)
                errors.push(...checked.errors)
            }
            if (!json.hideFromOverview && theme.id !== "personal" && this._isBuiltin) {
                // The first key in the the title-field must be english, otherwise the title in the loading page will be the different language
                const targetLanguage = theme.title.SupportedLanguages()[0]
                if (targetLanguage !== "en") {
                    warnings.push(
                        `TargetLanguage is not 'en' for public theme ${theme.id}, it is ${targetLanguage}. Move 'en' up in the title of the theme and set it as the first key`
                    )
                }

                // Official, public themes must have a full english translation
                const checked = new ValidateLanguageCompleteness("en").convert(theme, theme.id)
                errors.push(...checked.errors)
            }
        } catch (e) {
            errors.push(e)
        }

        return {
            result: json,
            errors,
            warnings,
            information,
        }
    }
}

export class ValidateThemeAndLayers extends Fuse<LayoutConfigJson> {
    constructor(
        doesImageExist: DoesImageExist,
        path: string,
        isBuiltin: boolean,
        sharedTagRenderings: Map<string, any>
    ) {
        super(
            "Validates a theme and the contained layers",
            new ValidateTheme(doesImageExist, path, isBuiltin, sharedTagRenderings),
            new On("layers", new Each(new ValidateLayer(undefined, isBuiltin, doesImageExist)))
        )
    }
}

class OverrideShadowingCheck extends DesugaringStep<LayoutConfigJson> {
    constructor() {
        super(
            "Checks that an 'overrideAll' does not override a single override",
            [],
            "OverrideShadowingCheck"
        )
    }

    convert(
        json: LayoutConfigJson,
        context: string
    ): { result: LayoutConfigJson; errors?: string[]; warnings?: string[] } {
        const overrideAll = json.overrideAll
        if (overrideAll === undefined) {
            return { result: json }
        }

        const errors = []
        const withOverride = json.layers.filter((l) => l["override"] !== undefined)

        for (const layer of withOverride) {
            for (const key in overrideAll) {
                if (key.endsWith("+") || key.startsWith("+")) {
                    // This key will _add_ to the list, not overwrite it - so no warning is needed
                    continue
                }
                if (
                    layer["override"][key] !== undefined ||
                    layer["override"]["=" + key] !== undefined
                ) {
                    const w =
                        "The override of layer " +
                        JSON.stringify(layer["builtin"]) +
                        " has a shadowed property: " +
                        key +
                        " is overriden by overrideAll of the theme"
                    errors.push(w)
                }
            }
        }

        return { result: json, errors }
    }
}

class MiscThemeChecks extends DesugaringStep<LayoutConfigJson> {
    constructor() {
        super("Miscelleanous checks on the theme", [], "MiscThemesChecks")
    }

    convert(
        json: LayoutConfigJson,
        context: string
    ): {
        result: LayoutConfigJson
        errors?: string[]
        warnings?: string[]
        information?: string[]
    } {
        const warnings = []
        const errors = []
        if (json.id !== "personal" && (json.layers === undefined || json.layers.length === 0)) {
            errors.push("The theme " + json.id + " has no 'layers' defined (" + context + ")")
        }
        if (json.socialImage === "") {
            warnings.push("Social image for theme " + json.id + " is the emtpy string")
        }
        return {
            result: json,
            warnings,
            errors,
        }
    }
}

export class PrevalidateTheme extends Fuse<LayoutConfigJson> {
    constructor() {
        super(
            "Various consistency checks on the raw JSON",
            new MiscThemeChecks(),
            new OverrideShadowingCheck()
        )
    }
}

export class DetectShadowedMappings extends DesugaringStep<QuestionableTagRenderingConfigJson> {
    private readonly _calculatedTagNames: string[]

    constructor(layerConfig?: LayerConfigJson) {
        super("Checks that the mappings don't shadow each other", [], "DetectShadowedMappings")
        this._calculatedTagNames = DetectShadowedMappings.extractCalculatedTagNames(layerConfig)
    }

    /**
     *
     * DetectShadowedMappings.extractCalculatedTagNames({calculatedTags: ["_abc:=js()"]}) // => ["_abc"]
     * DetectShadowedMappings.extractCalculatedTagNames({calculatedTags: ["_abc=js()"]}) // => ["_abc"]
     */
    private static extractCalculatedTagNames(
        layerConfig?: LayerConfigJson | { calculatedTags: string[] }
    ) {
        return (
            layerConfig?.calculatedTags?.map((ct) => {
                if (ct.indexOf(":=") >= 0) {
                    return ct.split(":=")[0]
                }
                return ct.split("=")[0]
            }) ?? []
        )
    }

    /**
     *
     * // should detect a simple shadowed mapping
     * const tr = {mappings: [
     *            {
     *                if: {or: ["key=value", "x=y"]},
     *                then: "Case A"
     *            },
     *            {
     *                if: "key=value",
     *                then: "Shadowed"
     *            }
     *        ]
     *    }
     * const r = new DetectShadowedMappings().convert(tr, "test");
     * r.errors.length // => 1
     * r.errors[0].indexOf("The mapping key=value is fully matched by a previous mapping (namely 0)") >= 0 // => true
     *
     * const tr = {mappings: [
     *         {
     *             if: {or: ["key=value", "x=y"]},
     *             then: "Case A"
     *         },
     *         {
     *             if: {and: ["key=value", "x=y"]},
     *             then: "Shadowed"
     *         }
     *     ]
     * }
     * const r = new DetectShadowedMappings().convert(tr, "test");
     * r.errors.length // => 1
     * r.errors[0].indexOf("The mapping key=value&x=y is fully matched by a previous mapping (namely 0)") >= 0 // => true
     */
    convert(
        json: QuestionableTagRenderingConfigJson,
        context: string
    ): { result: QuestionableTagRenderingConfigJson; errors?: string[]; warnings?: string[] } {
        const errors = []
        const warnings = []
        if (json.mappings === undefined || json.mappings.length === 0) {
            return { result: json }
        }
        const defaultProperties = {}
        for (const calculatedTagName of this._calculatedTagNames) {
            defaultProperties[calculatedTagName] =
                "some_calculated_tag_value_for_" + calculatedTagName
        }
        const parsedConditions = json.mappings.map((m, i) => {
            const ctx = `${context}.mappings[${i}]`
            const ifTags = TagUtils.Tag(m.if, ctx)
            if (
                m.hideInAnswer !== undefined &&
                m.hideInAnswer !== false &&
                m.hideInAnswer !== true
            ) {
                let conditionTags = TagUtils.Tag(m.hideInAnswer)
                // Merge the condition too!
                return new And([conditionTags, ifTags])
            }
            return ifTags
        })
        for (let i = 0; i < json.mappings.length; i++) {
            if (!parsedConditions[i].isUsableAsAnswer()) {
                // There is no straightforward way to convert this mapping.if into a properties-object, so we simply skip this one
                // Yes, it might be shadowed, but running this check is to difficult right now
                continue
            }
            const keyValues = parsedConditions[i].asChange(defaultProperties)
            const properties = {}
            keyValues.forEach(({ k, v }) => {
                properties[k] = v
            })
            for (let j = 0; j < i; j++) {
                const doesMatch = parsedConditions[j].matchesProperties(properties)
                if (
                    doesMatch &&
                    json.mappings[j].hideInAnswer === true &&
                    json.mappings[i].hideInAnswer !== true
                ) {
                    warnings.push(
                        `At ${context}: Mapping ${i} is shadowed by mapping ${j}. However, mapping ${j} has 'hideInAnswer' set, which will result in a different rendering in question-mode.`
                    )
                } else if (doesMatch) {
                    // The current mapping is shadowed!
                    errors.push(`At ${context}: Mapping ${i} is shadowed by mapping ${j} and will thus never be shown:
    The mapping ${parsedConditions[i].asHumanString(
        false,
        false,
        {}
    )} is fully matched by a previous mapping (namely ${j}), which matches:
    ${parsedConditions[j].asHumanString(false, false, {})}.

    To fix this problem, you can try to:
    - Move the shadowed mapping up
    - Do you want to use a different text in 'question mode'? Add 'hideInAnswer=true' to the first mapping
    - Use "addExtraTags": ["key=value", ...] in order to avoid a different rendering
         (e.g. [{"if": "fee=no",                     "then": "Free to use", "hideInAnswer":true},
                {"if": {"and":["fee=no","charge="]}, "then": "Free to use"}]
          can be replaced by
               [{"if":"fee=no", "then": "Free to use", "addExtraTags": ["charge="]}]
`)
                }
            }
        }

        return {
            errors,
            warnings,
            result: json,
        }
    }
}

export class DetectMappingsWithImages extends DesugaringStep<TagRenderingConfigJson> {
    private readonly _doesImageExist: DoesImageExist

    constructor(doesImageExist: DoesImageExist) {
        super(
            "Checks that 'then'clauses in mappings don't have images, but use 'icon' instead",
            [],
            "DetectMappingsWithImages"
        )
        this._doesImageExist = doesImageExist
    }

    /**
     * const r = new DetectMappingsWithImages(new DoesImageExist(new Set<string>())).convert({
     *     "mappings": [
     *         {
     *             "if": "bicycle_parking=stands",
     *             "then": {
     *                 "en": "Staple racks <img style='width: 25%' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "nl": "Nietjes <img style='width: 25%'' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "fr": "Arceaux <img style='width: 25%'' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "gl": "De roda (Stands) <img style='width: 25%'' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "de": "Fahrradbügel <img style='width: 25%'' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "hu": "Korlát <img style='width: 25%' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "it": "Archetti <img style='width: 25%' src='./assets/layers/bike_parking/staple.svg'>",
     *                 "zh_Hant": "單車架 <img style='width: 25%' src='./assets/layers/bike_parking/staple.svg'>"
     *             }
     *         }]
     * }, "test");
     * r.errors.length > 0 // => true
     * r.errors.some(msg => msg.indexOf("./assets/layers/bike_parking/staple.svg") >= 0) // => true
     */
    convert(
        json: TagRenderingConfigJson,
        context: string
    ): {
        result: TagRenderingConfigJson
        errors?: string[]
        warnings?: string[]
        information?: string[]
    } {
        const errors: string[] = []
        const warnings: string[] = []
        const information: string[] = []
        if (json.mappings === undefined || json.mappings.length === 0) {
            return { result: json }
        }
        const ignoreToken = "ignore-image-in-then"
        for (let i = 0; i < json.mappings.length; i++) {
            const mapping = json.mappings[i]
            const ignore = mapping["#"]?.indexOf(ignoreToken) >= 0
            const images = Utils.Dedup(Translations.T(mapping.then)?.ExtractImages() ?? [])
            const ctx = `${context}.mappings[${i}]`
            if (images.length > 0) {
                if (!ignore) {
                    errors.push(
                        `${ctx}: A mapping has an image in the 'then'-clause. Remove the image there and use \`"icon": <your-image>\` instead. The images found are ${images.join(
                            ", "
                        )}. (This check can be turned of by adding "#": "${ignoreToken}" in the mapping, but this is discouraged`
                    )
                } else {
                    information.push(
                        `${ctx}: Ignored image ${images.join(
                            ", "
                        )} in 'then'-clause of a mapping as this check has been disabled`
                    )

                    for (const image of images) {
                        this._doesImageExist.convertJoin(image, ctx, errors, warnings, information)
                    }
                }
            } else if (ignore) {
                warnings.push(`${ctx}: unused '${ignoreToken}' - please remove this`)
            }
        }

        return {
            errors,
            warnings,
            information,
            result: json,
        }
    }
}

class MiscTagRenderingChecks extends DesugaringStep<TagRenderingConfigJson> {
    constructor() {
        super("Miscellanious checks on the tagrendering", ["special"], "MiscTagREnderingChecksRew")
    }

    convert(
        json: TagRenderingConfigJson,
        context: string
    ): {
        result: TagRenderingConfigJson
        errors?: string[]
        warnings?: string[]
        information?: string[]
    } {
        const errors = []
        if (json["special"] !== undefined) {
            errors.push(
                "At " +
                    context +
                    ': detected `special` on the top level. Did you mean `{"render":{ "special": ... }}`'
            )
        }
        return {
            result: json,
            errors,
        }
    }
}

export class ValidateTagRenderings extends Fuse<TagRenderingConfigJson> {
    constructor(layerConfig?: LayerConfigJson, doesImageExist?: DoesImageExist) {
        super(
            "Various validation on tagRenderingConfigs",
            new DetectShadowedMappings(layerConfig),
            new DetectMappingsWithImages(doesImageExist)
        )
    }
}

export class ValidateLayer extends DesugaringStep<LayerConfigJson> {
    /**
     * The paths where this layer is originally saved. Triggers some extra checks
     * @private
     */
    private readonly _path?: string
    private readonly _isBuiltin: boolean
    private readonly _doesImageExist: DoesImageExist

    constructor(path: string, isBuiltin: boolean, doesImageExist: DoesImageExist) {
        super("Doesn't change anything, but emits warnings and errors", [], "ValidateLayer")
        this._path = path
        this._isBuiltin = isBuiltin
        this._doesImageExist = doesImageExist
    }

    convert(
        json: LayerConfigJson,
        context: string
    ): { result: LayerConfigJson; errors: string[]; warnings?: string[]; information?: string[] } {
        const errors = []
        const warnings = []
        const information = []
        context = "While validating a layer: " + context
        if (typeof json === "string") {
            errors.push(context + ": This layer hasn't been expanded: " + json)
            return {
                result: null,
                errors,
            }
        }

        if (json.tagRenderings !== undefined && json.tagRenderings.length > 0) {
            if (json.title === undefined) {
                errors.push(
                    context +
                        ": this layer does not have a title defined but it does have tagRenderings. Not having a title will disable the popups, resulting in an unclickable element. Please add a title. If not having a popup is intended and the tagrenderings need to be kept (e.g. in a library layer), set `title: null` to disable this error."
                )
            }
            if (json.title === null) {
                information.push(
                    context +
                        ": title is `null`. This results in an element that cannot be clicked - even though tagRenderings is set."
                )
            }
        }

        if (json["builtin"] !== undefined) {
            errors.push(context + ": This layer hasn't been expanded: " + json)
            return {
                result: null,
                errors,
            }
        }

        if (json.minzoom > Constants.userJourney.minZoomLevelToAddNewPoints) {
            ;(json.presets?.length > 0 ? errors : warnings).push(
                `At ${context}: minzoom is ${json.minzoom}, this should be at most ${Constants.userJourney.minZoomLevelToAddNewPoints} as a preset is set. Why? Selecting the pin for a new item will zoom in to level before adding the point. Having a greater minzoom will hide the points, resulting in possible duplicates`
            )
        }

        {
            // duplicate ids in tagrenderings check
            const duplicates = Utils.Dedup(
                Utils.Dupiclates(Utils.NoNull((json.tagRenderings ?? []).map((tr) => tr["id"])))
            ).filter((dupl) => dupl !== "questions")
            if (duplicates.length > 0) {
                errors.push(
                    "At " +
                        context +
                        ": some tagrenderings have a duplicate id: " +
                        duplicates.join(", ")
                )
            }
        }

        if (json.deletion !== undefined && json.deletion instanceof DeleteConfig) {
            if (json.deletion.softDeletionTags === undefined) {
                warnings.push("No soft-deletion tags in deletion block for layer " + json.id)
            }
        }

        try {
            if (this._isBuiltin) {
                // Some checks for legacy elements

                if (json["overpassTags"] !== undefined) {
                    errors.push(
                        "Layer " +
                            json.id +
                            'still uses the old \'overpassTags\'-format. Please use "source": {"osmTags": <tags>}\' instead of "overpassTags": <tags> (note: this isn\'t your fault, the custom theme generator still spits out the old format)'
                    )
                }
                const forbiddenTopLevel = [
                    "icon",
                    "wayHandling",
                    "roamingRenderings",
                    "roamingRendering",
                    "label",
                    "width",
                    "color",
                    "colour",
                    "iconOverlays",
                ]
                for (const forbiddenKey of forbiddenTopLevel) {
                    if (json[forbiddenKey] !== undefined)
                        errors.push(
                            context +
                                ": layer " +
                                json.id +
                                " still has a forbidden key " +
                                forbiddenKey
                        )
                }
                if (json["hideUnderlayingFeaturesMinPercentage"] !== undefined) {
                    errors.push(
                        context +
                            ": layer " +
                            json.id +
                            " contains an old 'hideUnderlayingFeaturesMinPercentage'"
                    )
                }

                if (
                    json.isShown !== undefined &&
                    (json.isShown["render"] !== undefined || json.isShown["mappings"] !== undefined)
                ) {
                    warnings.push(context + " has a tagRendering as `isShown`")
                }
            }
            if (this._isBuiltin) {
                // Check location of layer file
                const expected: string = `assets/layers/${json.id}/${json.id}.json`
                if (this._path != undefined && this._path.indexOf(expected) < 0) {
                    errors.push(
                        "Layer is in an incorrect place. The path is " +
                            this._path +
                            ", but expected " +
                            expected
                    )
                }
            }
            if (this._isBuiltin) {
                // Check for correct IDs
                if (json.tagRenderings?.some((tr) => tr["id"] === "")) {
                    const emptyIndexes: number[] = []
                    for (let i = 0; i < json.tagRenderings.length; i++) {
                        const tagRendering = json.tagRenderings[i]
                        if (tagRendering["id"] === "") {
                            emptyIndexes.push(i)
                        }
                    }
                    errors.push(
                        `Some tagrendering-ids are empty or have an emtpy string; this is not allowed (at ${context}.tagRenderings.[${emptyIndexes.join(
                            ","
                        )}])`
                    )
                }

                const duplicateIds = Utils.Dupiclates(
                    (json.tagRenderings ?? [])
                        ?.map((f) => f["id"])
                        .filter((id) => id !== "questions")
                )
                if (duplicateIds.length > 0 && !Utils.runningFromConsole) {
                    errors.push(
                        `Some tagRenderings have a duplicate id: ${duplicateIds} (at ${context}.tagRenderings)`
                    )
                }

                if (json.description === undefined) {
                    if (Constants.priviliged_layers.indexOf(json.id) >= 0) {
                        errors.push(context + ": A priviliged layer must have a description")
                    } else {
                        warnings.push(context + ": A builtin layer should have a description")
                    }
                }
            }

            if (json.tagRenderings !== undefined) {
                const r = new On(
                    "tagRenderings",
                    new Each(new ValidateTagRenderings(json, this._doesImageExist))
                ).convert(json, context)
                warnings.push(...(r.warnings ?? []))
                errors.push(...(r.errors ?? []))
                information.push(...(r.information ?? []))
            }

            {
                const hasCondition = json.mapRendering?.filter(
                    (mr) => mr["icon"] !== undefined && mr["icon"]["condition"] !== undefined
                )
                if (hasCondition?.length > 0) {
                    errors.push(
                        "At " +
                            context +
                            ":\n    One or more icons in the mapRenderings have a condition set. Don't do this, as this will result in an invisible but clickable element. Use extra filters in the source instead. The offending mapRenderings are:\n" +
                            JSON.stringify(hasCondition, null, "  ")
                    )
                }
            }

            if (json.presets !== undefined) {
                // Check that a preset will be picked up by the layer itself
                const baseTags = TagUtils.Tag(json.source.osmTags)
                for (let i = 0; i < json.presets.length; i++) {
                    const preset = json.presets[i]
                    const tags: { k: string; v: string }[] = new And(
                        preset.tags.map((t) => TagUtils.Tag(t))
                    ).asChange({ id: "node/-1" })
                    const properties = {}
                    for (const tag of tags) {
                        properties[tag.k] = tag.v
                    }
                    const doMatch = baseTags.matchesProperties(properties)
                    if (!doMatch) {
                        errors.push(
                            context +
                                ".presets[" +
                                i +
                                "]: This preset does not match the required tags of this layer. This implies that a newly added point will not show up.\n    A newly created point will have properties: " +
                                JSON.stringify(properties) +
                                "\n    The required tags are: " +
                                baseTags.asHumanString(false, false, {})
                        )
                    }
                }
            }
        } catch (e) {
            errors.push(e)
        }

        return {
            result: json,
            errors,
            warnings,
            information,
        }
    }
}

export class DetectDuplicateFilters extends DesugaringStep<{
    layers: LayerConfigJson[]
    themes: LayoutConfigJson[]
}> {
    constructor() {
        super(
            "Tries to detect layers where a shared filter can be used (or where similar filters occur)",
            [],
            "DetectDuplicateFilters"
        )
    }

    /**
     * Add all filter options into 'perOsmTag'
     */
    private addLayerFilters(
        layer: LayerConfigJson,
        perOsmTag: Map<
            string,
            {
                layer: LayerConfigJson
                layout: LayoutConfigJson | undefined
                filter: FilterConfigJson
            }[]
        >,
        layout?: LayoutConfigJson | undefined
    ): void {
        if (layer.filter === undefined || layer.filter === null) {
            return
        }
        if (layer.filter["sameAs"] !== undefined) {
            return
        }
        for (const filter of <(string | FilterConfigJson)[]>layer.filter) {
            if (typeof filter === "string") {
                continue
            }

            if (filter["#"]?.indexOf("ignore-possible-duplicate") >= 0) {
                continue
            }

            for (const option of filter.options) {
                if (option.osmTags === undefined) {
                    continue
                }
                const key = JSON.stringify(option.osmTags)
                if (!perOsmTag.has(key)) {
                    perOsmTag.set(key, [])
                }
                perOsmTag.get(key).push({
                    layer,
                    filter,
                    layout,
                })
            }
        }
    }

    convert(
        json: { layers: LayerConfigJson[]; themes: LayoutConfigJson[] },
        context: string
    ): {
        result: { layers: LayerConfigJson[]; themes: LayoutConfigJson[] }
        errors?: string[]
        warnings?: string[]
        information?: string[]
    } {
        const errors: string[] = []
        const warnings: string[] = []
        const information: string[] = []

        const { layers, themes } = json
        const perOsmTag = new Map<
            string,
            {
                layer: LayerConfigJson
                layout: LayoutConfigJson | undefined
                filter: FilterConfigJson
            }[]
        >()

        for (const layer of layers) {
            this.addLayerFilters(layer, perOsmTag)
        }

        for (const theme of themes) {
            if (theme.id === "personal") {
                continue
            }
            for (const layer of theme.layers) {
                if (typeof layer === "string") {
                    continue
                }
                if (layer["builtin"] !== undefined) {
                    continue
                }
                this.addLayerFilters(<LayerConfigJson>layer, perOsmTag, theme)
            }
        }

        // At this point, we have gathered all filters per tag - time to find duplicates
        perOsmTag.forEach((value, key) => {
            if (value.length <= 1) {
                // Seen this key just once, it is unique
                return
            }
            let msg = "Possible duplicate filter: " + key
            for (const { filter, layer, layout } of value) {
                let id = ""
                if (layout !== undefined) {
                    id = layout.id + ":"
                }
                msg += `\n      - ${id}${layer.id}.${filter.id}`
            }
            warnings.push(msg)
        })

        return {
            result: json,
            errors,
            warnings,
            information,
        }
    }
}

import {UIElement} from "../UIElement";
import Svg from "../../Svg";
import State from "../../State";
import Combine from "./Combine";
import Ornament from "./Ornament";

/**
 * Wraps some contents into a panel that scrolls the content _under_ the title
 */
export default class ScrollableFullScreen extends UIElement {
    private _component: Combine;


    constructor(title: UIElement, content: UIElement) {
        super();
        const returnToTheMap = Svg.back_svg().onClick(() => {
            State.state.fullScreenMessage.setData(undefined);
            State.state.selectedElement.setData(undefined);
        }).SetClass("featureinfobox-back-to-the-map only-on-mobile mb-2")
        title.SetClass("block w-full")
        const ornament = new Combine([new Ornament().SetStyle("height:5em;")]).SetClass("only-on-mobile")

        this._component = new Combine([
            new Combine([returnToTheMap, title]).SetClass("border-b-2 border-black shadow sm:shadow-none fixed sm:relative top-0 left-0 right-0 z-50 bg-white p-2 pb-0 sm:p-0 flex overflow-hidden"),
            new Combine(["<span>", content, "</span>", ornament])
                .SetClass("block relative pt-16 sm:pt-4 w-full max-h-screen sm:max-h-65vh landscape:max-h-screen overflow-y-auto overflow-x-hidden"),
            // We add an ornament which takes around 5em. This is in order to make sure the Web UI doesn't hide
        ])
        this.SetClass("block flex flex-col");

    }

    InnerRender(): string {
        return this._component.Render();
    }


}
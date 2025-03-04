

 Special tag renderings 
========================



In a tagrendering, some special values are substituted by an advanced UI-element. This allows advanced features and visualizations to be reused by custom themes or even to query third-party API's.

General usage is `{func_name()}`, `{func_name(arg, someotherarg)}` or `{func_name(args):cssStyle}`. Note that you _do not_ need to use quotes around your arguments, the comma is enough to separate them. This also implies you cannot use a comma in your args



#### Using expanded syntax 



Instead of using `{"render": {"en": "{some_special_visualisation(some_arg, some other really long message, more args)} , "nl": "{some_special_visualisation(some_arg, een boodschap in een andere taal, more args)}}`, one can also write

`{
  "render": {
    "special": {
      "type": "some_special_visualisation",
      "before": {
        "en": "Some text to prefix before the special element (e.g. a title)",
        "nl": "Een tekst om voor het element te zetten (bv. een titel)"
      },
      "after": {
        "en": "Some text to put after the element, e.g. a footer"
      },
      "argname": "some_arg",
      "message": {
        "en": "some other really long message",
        "nl": "een boodschap in een andere taal"
      },
      "other_arg_name": "more args"
    }
  }
}`

## Table of contents

1. [Special tag renderings](#special-tag-renderings)
      * [Using expanded syntax](#using-expanded-syntax)
    + [histogram](#histogram)
      * [Example usage of histogram](#example-usage-of-histogram)
    + [steal](#steal)
      * [Example usage of steal](#example-usage-of-steal)
    + [minimap](#minimap)
      * [Example usage of minimap](#example-usage-of-minimap)
    + [sided_minimap](#sided_minimap)
      * [Example usage of sided_minimap](#example-usage-of-sided_minimap)
    + [share_link](#share_link)
      * [Example usage of share_link](#example-usage-of-share_link)
    + [upload_to_osm](#upload_to_osm)
      * [Example usage of upload_to_osm](#example-usage-of-upload_to_osm)
    + [multi_apply](#multi_apply)
      * [Example usage of multi_apply](#example-usage-of-multi_apply)
    + [export_as_gpx](#export_as_gpx)
      * [Example usage of export_as_gpx](#example-usage-of-export_as_gpx)
    + [add_note_comment](#add_note_comment)
      * [Example usage of add_note_comment](#example-usage-of-add_note_comment)
    + [plantnet_detection](#plantnet_detection)
      * [Example usage of plantnet_detection](#example-usage-of-plantnet_detection)
    + [import_button](#import_button)
      * [Example usage of import_button](#example-usage-of-import_button)
    + [import_way_button](#import_way_button)
      * [Example usage of import_way_button](#example-usage-of-import_way_button)
    + [conflate_button](#conflate_button)
      * [Example usage of conflate_button](#example-usage-of-conflate_button)
    + [tag_apply](#tag_apply)
      * [Example usage of tag_apply](#example-usage-of-tag_apply)
    + [close_note](#close_note)
      * [Example usage of close_note](#example-usage-of-close_note)
    + [nearby_images](#nearby_images)
      * [Example usage of nearby_images](#example-usage-of-nearby_images)
    + [mapillary_link](#mapillary_link)
      * [Example usage of mapillary_link](#example-usage-of-mapillary_link)
    + [language_chooser](#language_chooser)
      * [Example usage of language_chooser](#example-usage-of-language_chooser)
    + [all_tags](#all_tags)
      * [Example usage of all_tags](#example-usage-of-all_tags)
    + [image_carousel](#image_carousel)
      * [Example usage of image_carousel](#example-usage-of-image_carousel)
    + [image_upload](#image_upload)
      * [Example usage of image_upload](#example-usage-of-image_upload)
    + [wikipedia](#wikipedia)
      * [Example usage of wikipedia](#example-usage-of-wikipedia)
    + [wikidata_label](#wikidata_label)
      * [Example usage of wikidata_label](#example-usage-of-wikidata_label)
    + [reviews](#reviews)
      * [Example usage of reviews](#example-usage-of-reviews)
    + [opening_hours_table](#opening_hours_table)
      * [Example usage of opening_hours_table](#example-usage-of-opening_hours_table)
    + [live](#live)
      * [Example usage of live](#example-usage-of-live)
    + [canonical](#canonical)
      * [Example usage of canonical](#example-usage-of-canonical)
    + [export_as_geojson](#export_as_geojson)
      * [Example usage of export_as_geojson](#example-usage-of-export_as_geojson)
    + [open_in_iD](#open_in_id)
      * [Example usage of open_in_iD](#example-usage-of-open_in_id)
    + [open_in_josm](#open_in_josm)
      * [Example usage of open_in_josm](#example-usage-of-open_in_josm)
    + [clear_location_history](#clear_location_history)
      * [Example usage of clear_location_history](#example-usage-of-clear_location_history)
    + [visualize_note_comments](#visualize_note_comments)
      * [Example usage of visualize_note_comments](#example-usage-of-visualize_note_comments)
    + [add_image_to_note](#add_image_to_note)
      * [Example usage of add_image_to_note](#example-usage-of-add_image_to_note)
    + [title](#title)
      * [Example usage of title](#example-usage-of-title)
    + [maproulette_task](#maproulette_task)
      * [Example usage of maproulette_task](#example-usage-of-maproulette_task)
    + [statistics](#statistics)
      * [Example usage of statistics](#example-usage-of-statistics)
    + [send_email](#send_email)
      * [Example usage of send_email](#example-usage-of-send_email)
    + [multi](#multi)
      * [Example usage of multi](#example-usage-of-multi)
    + [auto_apply](#auto_apply)
      * [Example usage of auto_apply](#example-usage-of-auto_apply)





### histogram 

 Create a histogram for a list of given values, read from the properties. 

name | default | description
------ | --------- | -------------
key | _undefined_ | The key to be read and to generate a histogram from
title | _empty string_ | This text will be placed above the texts (in the first column of the visulasition)
countHeader | _empty string_ | This text will be placed above the bars
colors* | _undefined_ | (Matches all resting arguments - optional) Matches a regex onto a color value, e.g. `3[a-zA-Z+-]*:#33cc33`
 

#### Example usage of histogram 

 `{histogram('some_key')}` with properties being `{some_key: ['a','b','a','c']} to create a histogram



### steal 

 Shows a tagRendering from a different object as if this was the object itself 

name | default | description
------ | --------- | -------------
featureId | _undefined_ | The key of the attribute which contains the id of the feature from which to use the tags
tagRenderingId | _undefined_ | The layer-id and tagRenderingId to render. Can be multiple value if ';'-separated (in which case every value must also contain the layerId, e.g. `layerId.tagRendering0; layerId.tagRendering1`). Note: this can cause layer injection
 

#### Example usage of steal 

 `{steal(,)}`



### minimap 

 A small map showing the selected feature. 

name | default | description
------ | --------- | -------------
zoomlevel | 18 | The (maximum) zoomlevel: the target zoomlevel after fitting the entire feature. The minimap will fit the entire feature, then zoom out to this zoom level. The higher, the more zoomed in with 1 being the entire world and 19 being really close
idKey | id | (Matches all resting arguments) This argument should be the key of a property of the feature. The corresponding value is interpreted as either the id or the a list of ID's. The features with these ID's will be shown on this minimap. (Note: if the key is 'id', list interpration is disabled)
 

#### Example usage of minimap 

 `{minimap(18,id)}`



### sided_minimap 

 A small map showing _only one side_ the selected feature. *This features requires to have linerenderings with offset* as only linerenderings with a postive or negative offset will be shown. Note: in most cases, this map will be automatically introduced 

name | default | description
------ | --------- | -------------
side | _undefined_ | The side to show, either `left` or `right`
 

#### Example usage of sided_minimap 

 `{sided_minimap(left)}`



### share_link 

 Creates a link that (attempts to) open the native 'share'-screen 

name | default | description
------ | --------- | -------------
url | _undefined_ | The url to share (default: current URL)
 

#### Example usage of share_link 

 {share_link()} to share the current page, {share_link(<some_url>)} to share the given url



### upload_to_osm 

 Uploads the GPS-history as GPX to OpenStreetMap.org; clears the history afterwards. The actual feature is ignored. 

#### Example usage of upload_to_osm 

 `{upload_to_osm()}`



### multi_apply 

 A button to apply the tagging of this object onto a list of other features. This is an advanced feature for which you'll need calculatedTags 

name | default | description
------ | --------- | -------------
feature_ids | _undefined_ | A JSON-serialized list of IDs of features to apply the tagging on
keys | _undefined_ | One key (or multiple keys, seperated by ';') of the attribute that should be copied onto the other features.
text | _undefined_ | The text to show on the button
autoapply | _undefined_ | A boolean indicating wether this tagging should be applied automatically if the relevant tags on this object are changed. A visual element indicating the multi_apply is still shown
overwrite | _undefined_ | If set to 'true', the tags on the other objects will always be overwritten. The default behaviour will be to only change the tags on other objects if they are either undefined or had the same value before the change
 

#### Example usage of multi_apply 

 {multi_apply(_features_with_the_same_name_within_100m, name:etymology:wikidata;name:etymology, Apply etymology information on all nearby objects with the same name)}



### export_as_gpx 

 Exports the selected feature as GPX-file 

#### Example usage of export_as_gpx 

 `{export_as_gpx()}`



### add_note_comment 

 A textfield to add a comment to a node (with the option to close the note). 

name | default | description
------ | --------- | -------------
Id-key | id | The property name where the ID of the note to close can be found
 

#### Example usage of add_note_comment 

 `{add_note_comment(id)}`



### plantnet_detection 

 Sends the images linked to the current object to plantnet.org and asks it what plant species is shown on it. The user can then select the correct species; the corresponding wikidata-identifier will then be added to the object (together with `source:species:wikidata=plantnet.org AI`).  

name | default | description
------ | --------- | -------------
image_key | image,mapillary,image,wikidata,wikimedia_commons,image,image | The keys given to the images, e.g. if <span class='literal-code'>image</span> is given, the first picture URL will be added as <span class='literal-code'>image</span>, the second as <span class='literal-code'>image:0</span>, the third as <span class='literal-code'>image:1</span>, etc... Multiple values are allowed if ';'-separated 
 

#### Example usage of plantnet_detection 

 `{plantnet_detection(image,mapillary,image,wikidata,wikimedia_commons,image,image)}`



### import_button 

 This button will copy the point from an external dataset into OpenStreetMap

Note that the contributor must zoom to at least zoomlevel 18 to be able to use this functionality.
It is only functional in official themes, but can be tested in unoffical themes.

#### Specifying which tags to copy or add

The argument `tags` of the import button takes a `;`-seperated list of tags to add (or the name of a property which contains a JSON-list of properties).

These can either be a tag to add, such as `amenity=fast_food` or can use a substitution, e.g. `addr:housenumber=$number`.
This new point will then have the tags `amenity=fast_food` and `addr:housenumber` with the value that was saved in `number` in the original feature.

If a value to substitute is undefined, empty string will be used instead.

This supports multiple values, e.g. `ref=$source:geometry:type/$source:geometry:ref`

Remark that the syntax is slightly different then expected; it uses '$' to note a value to copy, followed by a name (matched with `[a-zA-Z0-9_:]*`). Sadly, delimiting with `{}` as these already mark the boundaries of the special rendering...

Note that these values can be prepare with javascript in the theme by using a [calculatedTag](calculatedTags.md#calculating-tags-with-javascript)
 
#### Importing a dataset into OpenStreetMap: requirements

If you want to import a dataset, make sure that:

1. The dataset to import has a suitable license
2. The community has been informed of the import
3. All other requirements of the [import guidelines](https://wiki.openstreetmap.org/wiki/Import/Guidelines) have been followed

There are also some technicalities in your theme to keep in mind:

1. The new feature will be added and will flow through the program as any other new point as if it came from OSM.
    This means that there should be a layer which will match the new tags and which will display it.
2. The original feature from your geojson layer will gain the tag '_imported=yes'.
    This should be used to change the appearance or even to hide it (eg by changing the icon size to zero)
3. There should be a way for the theme to detect previously imported points, even after reloading.
    A reference number to the original dataset is an excellent way to do this
4. When importing ways, the theme creator is also responsible of avoiding overlapping ways.

#### Disabled in unofficial themes

The import button can be tested in an unofficial theme by adding `test=true` or `backend=osm-test` as [URL-paramter](URL_Parameters.md).
The import button will show up then. If in testmode, you can read the changeset-XML directly in the web console.
In the case that MapComplete is pointed to the testing grounds, the edit will be made on https://master.apis.dev.openstreetmap.org
 

name | default | description
------ | --------- | -------------
targetLayer | _undefined_ | The id of the layer where this point should end up. This is not very strict, it will simply result in checking that this layer is shown preventing possible duplicate elements
tags | _undefined_ | The tags to add onto the new object - see specification above. If this is a key (a single word occuring in the properties of the object), the corresponding value is taken and expanded instead
text | Import this data into OpenStreetMap | The text to show on the button
icon | ./assets/svg/addSmall.svg | A nice icon to show in the button
snap_onto_layers | _undefined_ | If a way of the given layer(s) is closeby, will snap the new point onto this way (similar as preset might snap). To show multiple layers to snap onto, use a `;`-seperated list
max_snap_distance | 5 | The maximum distance that the imported point will be moved to snap onto a way in an already existing layer (in meters). This is previewed to the contributor, similar to the 'add new point'-action of MapComplete
note_id | _undefined_ | If given, this key will be read. The corresponding note on OSM will be closed, stating 'imported'
location_picker | photo | Chooses the background for the precise location picker, options are 'map', 'photo' or 'osmbasedmap' or 'none' if the precise input picker should be disabled
maproulette_id | _undefined_ | If given, the maproulette challenge will be marked as fixed
 

#### Example usage of import_button 

 `{import_button(,,Import this data into OpenStreetMap,./assets/svg/addSmall.svg,,5,,photo,)}`



### import_way_button 

 This button will copy the data from an external dataset into OpenStreetMap

Note that the contributor must zoom to at least zoomlevel 18 to be able to use this functionality.
It is only functional in official themes, but can be tested in unoffical themes.

#### Specifying which tags to copy or add

The argument `tags` of the import button takes a `;`-seperated list of tags to add (or the name of a property which contains a JSON-list of properties).

These can either be a tag to add, such as `amenity=fast_food` or can use a substitution, e.g. `addr:housenumber=$number`.
This new point will then have the tags `amenity=fast_food` and `addr:housenumber` with the value that was saved in `number` in the original feature.

If a value to substitute is undefined, empty string will be used instead.

This supports multiple values, e.g. `ref=$source:geometry:type/$source:geometry:ref`

Remark that the syntax is slightly different then expected; it uses '$' to note a value to copy, followed by a name (matched with `[a-zA-Z0-9_:]*`). Sadly, delimiting with `{}` as these already mark the boundaries of the special rendering...

Note that these values can be prepare with javascript in the theme by using a [calculatedTag](calculatedTags.md#calculating-tags-with-javascript)
 
#### Importing a dataset into OpenStreetMap: requirements

If you want to import a dataset, make sure that:

1. The dataset to import has a suitable license
2. The community has been informed of the import
3. All other requirements of the [import guidelines](https://wiki.openstreetmap.org/wiki/Import/Guidelines) have been followed

There are also some technicalities in your theme to keep in mind:

1. The new feature will be added and will flow through the program as any other new point as if it came from OSM.
    This means that there should be a layer which will match the new tags and which will display it.
2. The original feature from your geojson layer will gain the tag '_imported=yes'.
    This should be used to change the appearance or even to hide it (eg by changing the icon size to zero)
3. There should be a way for the theme to detect previously imported points, even after reloading.
    A reference number to the original dataset is an excellent way to do this
4. When importing ways, the theme creator is also responsible of avoiding overlapping ways.

#### Disabled in unofficial themes

The import button can be tested in an unofficial theme by adding `test=true` or `backend=osm-test` as [URL-paramter](URL_Parameters.md).
The import button will show up then. If in testmode, you can read the changeset-XML directly in the web console.
In the case that MapComplete is pointed to the testing grounds, the edit will be made on https://master.apis.dev.openstreetmap.org
 

name | default | description
------ | --------- | -------------
targetLayer | _undefined_ | The id of the layer where this point should end up. This is not very strict, it will simply result in checking that this layer is shown preventing possible duplicate elements
tags | _undefined_ | The tags to add onto the new object - see specification above. If this is a key (a single word occuring in the properties of the object), the corresponding value is taken and expanded instead
text | Import this data into OpenStreetMap | The text to show on the button
icon | ./assets/svg/addSmall.svg | A nice icon to show in the button
snap_to_point_if | _undefined_ | Points with the given tags will be snapped to or moved
max_snap_distance | 0.05 | If the imported object is a LineString or (Multi)Polygon, already existing OSM-points will be reused to construct the geometry of the newly imported way
move_osm_point_if | _undefined_ | Moves the OSM-point to the newly imported point if these conditions are met
max_move_distance | 0.05 | If an OSM-point is moved, the maximum amount of meters it is moved. Capped on 20m
snap_onto_layers | _undefined_ | If no existing nearby point exists, but a line of a specified layer is closeby, snap to this layer instead
snap_to_layer_max_distance | 0.1 | Distance to distort the geometry to snap to this layer
 

#### Example usage of import_way_button 

 `{import_way_button(,,Import this data into OpenStreetMap,./assets/svg/addSmall.svg,,0.05,,0.05,,0.1)}`



### conflate_button 

 This button will modify the geometry of an existing OSM way to match the specified geometry. This can conflate OSM-ways with LineStrings and Polygons (only simple polygons with one single ring). An attempt is made to move points with special values to a decent new location (e.g. entrances)

Note that the contributor must zoom to at least zoomlevel 18 to be able to use this functionality.
It is only functional in official themes, but can be tested in unoffical themes.

#### Specifying which tags to copy or add

The argument `tags` of the import button takes a `;`-seperated list of tags to add (or the name of a property which contains a JSON-list of properties).

These can either be a tag to add, such as `amenity=fast_food` or can use a substitution, e.g. `addr:housenumber=$number`.
This new point will then have the tags `amenity=fast_food` and `addr:housenumber` with the value that was saved in `number` in the original feature.

If a value to substitute is undefined, empty string will be used instead.

This supports multiple values, e.g. `ref=$source:geometry:type/$source:geometry:ref`

Remark that the syntax is slightly different then expected; it uses '$' to note a value to copy, followed by a name (matched with `[a-zA-Z0-9_:]*`). Sadly, delimiting with `{}` as these already mark the boundaries of the special rendering...

Note that these values can be prepare with javascript in the theme by using a [calculatedTag](calculatedTags.md#calculating-tags-with-javascript)
 
#### Importing a dataset into OpenStreetMap: requirements

If you want to import a dataset, make sure that:

1. The dataset to import has a suitable license
2. The community has been informed of the import
3. All other requirements of the [import guidelines](https://wiki.openstreetmap.org/wiki/Import/Guidelines) have been followed

There are also some technicalities in your theme to keep in mind:

1. The new feature will be added and will flow through the program as any other new point as if it came from OSM.
    This means that there should be a layer which will match the new tags and which will display it.
2. The original feature from your geojson layer will gain the tag '_imported=yes'.
    This should be used to change the appearance or even to hide it (eg by changing the icon size to zero)
3. There should be a way for the theme to detect previously imported points, even after reloading.
    A reference number to the original dataset is an excellent way to do this
4. When importing ways, the theme creator is also responsible of avoiding overlapping ways.

#### Disabled in unofficial themes

The import button can be tested in an unofficial theme by adding `test=true` or `backend=osm-test` as [URL-paramter](URL_Parameters.md).
The import button will show up then. If in testmode, you can read the changeset-XML directly in the web console.
In the case that MapComplete is pointed to the testing grounds, the edit will be made on https://master.apis.dev.openstreetmap.org
 

name | default | description
------ | --------- | -------------
targetLayer | _undefined_ | The id of the layer where this point should end up. This is not very strict, it will simply result in checking that this layer is shown preventing possible duplicate elements
tags | _undefined_ | The tags to add onto the new object - see specification above. If this is a key (a single word occuring in the properties of the object), the corresponding value is taken and expanded instead
text | Import this data into OpenStreetMap | The text to show on the button
icon | ./assets/svg/addSmall.svg | A nice icon to show in the button
way_to_conflate | _undefined_ | The key, of which the corresponding value is the id of the OSM-way that must be conflated; typically a calculatedTag
 

#### Example usage of conflate_button 

 `{conflate_button(,,Import this data into OpenStreetMap,./assets/svg/addSmall.svg,)}`



### tag_apply 

 Shows a big button; clicking this button will apply certain tags onto the feature.

The first argument takes a specification of which tags to add.
These can either be a tag to add, such as `amenity=fast_food` or can use a substitution, e.g. `addr:housenumber=$number`.
This new point will then have the tags `amenity=fast_food` and `addr:housenumber` with the value that was saved in `number` in the original feature.

If a value to substitute is undefined, empty string will be used instead.

This supports multiple values, e.g. `ref=$source:geometry:type/$source:geometry:ref`

Remark that the syntax is slightly different then expected; it uses '$' to note a value to copy, followed by a name (matched with `[a-zA-Z0-9_:]*`). Sadly, delimiting with `{}` as these already mark the boundaries of the special rendering...

Note that these values can be prepare with javascript in the theme by using a [calculatedTag](calculatedTags.md#calculating-tags-with-javascript)
  

name | default | description
------ | --------- | -------------
tags_to_apply | _undefined_ | A specification of the tags to apply
message | _undefined_ | The text to show to the contributor
image | _undefined_ | An image to show to the contributor on the button
id_of_object_to_apply_this_one | _undefined_ | If specified, applies the the tags onto _another_ object. The id will be read from properties[id_of_object_to_apply_this_one] of the selected object. The tags are still calculated based on the tags of the _selected_ element
 

#### Example usage of tag_apply 

 `{tag_apply(survey_date=$_now:date, Surveyed today!)}`, `{tag_apply(addr:street=$addr:street, Apply the address, apply_icon.svg, _closest_osm_id)



### close_note 

 Button to close a note. A predifined text can be defined to close the note with. If the note is already closed, will show a small text. 

name | default | description
------ | --------- | -------------
text | _undefined_ | Text to show on this button
icon | checkmark.svg | Icon to show
idkey | id | The property name where the ID of the note to close can be found
comment | _undefined_ | Text to add onto the note when closing
minZoom | _undefined_ | If set, only show the closenote button if zoomed in enough
zoomButton | _undefined_ | Text to show if not zoomed in enough
 

#### Example usage of close_note 

 `{close_note(,checkmark.svg,id,,,)}`



### nearby_images 

 A component showing nearby images loaded from various online services such as Mapillary. In edit mode and when used on a feature, the user can select an image to add to the feature 

name | default | description
------ | --------- | -------------
mode | expandable | Indicates how this component is initialized. Options are: 

- `open`: always show and load the pictures
- `collapsable`: show the pictures, but a user can collapse them
- `expandable`: shown by default; but a user can collapse them.
mapillary | true | If 'true', includes a link to mapillary on this location.
 

#### Example usage of nearby_images 

 `{nearby_images(expandable,true)}`



### mapillary_link 

 Adds a button to open mapillary on the specified location 

name | default | description
------ | --------- | -------------
zoom | 18 | The startzoom of mapillary
 

#### Example usage of mapillary_link 

 `{mapillary_link(18)}`



### language_chooser 

 The language element allows to show and pick all known (modern) languages. The key can be set 

name | default | description
------ | --------- | -------------
key | _undefined_ | What key to use, e.g. `language`, `tactile_writing:braille:language`, ... If a language is supported, the language code will be appended to this key, resulting in `language:nl=yes` if nl is picked 
question | _undefined_ | What to ask if no questions are known
render_list_item | {language()} | How a single language will be shown in the list of languages. Use `{language}` to indicate the language (which it must contain).
render_single_language | _undefined_ | What will be shown if the feature only supports a single language
render_all | {list()} | The full rendering. Use `{list}` to show where the list of languages must come. Optional if mode=single
no_known_languages | _undefined_ | The text that is shown if no languages are known for this key. If this text is omitted, the languages will be prompted instead
mode | multi | If one or many languages can be selected. Should be 'multi' or 'single'
 

#### Example usage of language_chooser 

 `{language_chooser(,,{language()},,{list()},,multi)}`



### all_tags 

 Prints all key-value pairs of the object - used for debugging 

#### Example usage of all_tags 

 `{all_tags()}`



### image_carousel 

 Creates an image carousel for the given sources. An attempt will be made to guess what source is used. Supported: Wikidata identifiers, Wikipedia pages, Wikimedia categories, IMGUR (with attribution, direct links) 

name | default | description
------ | --------- | -------------
image_key | image,mapillary,image,wikidata,wikimedia_commons,image,image | The keys given to the images, e.g. if <span class='literal-code'>image</span> is given, the first picture URL will be added as <span class='literal-code'>image</span>, the second as <span class='literal-code'>image:0</span>, the third as <span class='literal-code'>image:1</span>, etc... Multiple values are allowed if ';'-separated 
 

#### Example usage of image_carousel 

 `{image_carousel(image,mapillary,image,wikidata,wikimedia_commons,image,image)}`



### image_upload 

 Creates a button where a user can upload an image to IMGUR 

name | default | description
------ | --------- | -------------
image-key | image | Image tag to add the URL to (or image-tag:0, image-tag:1 when multiple images are added)
label | Add image | The text to show on the button
 

#### Example usage of image_upload 

 `{image_upload(image,Add image)}`



### wikipedia 

 A box showing the corresponding wikipedia article - based on the wikidata tag 

name | default | description
------ | --------- | -------------
keyToShowWikipediaFor | wikidata;wikipedia | Use the wikidata entry from this key to show the wikipedia article for. Multiple keys can be given (separated by ';'), in which case the first matching value is used
 

#### Example usage of wikipedia 

 `{wikipedia()}` is a basic example, `{wikipedia(name:etymology:wikidata)}` to show the wikipedia page of whom the feature was named after. Also remember that these can be styled, e.g. `{wikipedia():max-height: 10rem}` to limit the height



### wikidata_label 

 Shows the label of the corresponding wikidata-item 

name | default | description
------ | --------- | -------------
keyToShowWikidataFor | wikidata | Use the wikidata entry from this key to show the label
 

#### Example usage of wikidata_label 

 `{wikidata_label()}` is a basic example, `{wikipedia(name:etymology:wikidata)}` to show the label itself



### reviews 

 Adds an overview of the mangrove-reviews of this object. Mangrove.Reviews needs - in order to identify the reviewed object - a coordinate and a name. By default, the name of the object is given, but this can be overwritten 

name | default | description
------ | --------- | -------------
subjectKey | name | The key to use to determine the subject. If specified, the subject will be <b>tags[subjectKey]</b>
fallback | _undefined_ | The identifier to use, if <i>tags[subjectKey]</i> as specified above is not available. This is effectively a fallback value
 

#### Example usage of reviews 

 `{reviews()}` for a vanilla review, `{reviews(name, play_forest)}` to review a play forest. If a name is known, the name will be used as identifier, otherwise 'play_forest' is used



### opening_hours_table 

 Creates an opening-hours table. Usage: {opening_hours_table(opening_hours)} to create a table of the tag 'opening_hours'. 

name | default | description
------ | --------- | -------------
key | opening_hours | The tagkey from which the table is constructed.
prefix | _empty string_ | Remove this string from the start of the value before parsing. __Note: use `&LPARENs` to indicate `(` if needed__
postfix | _empty string_ | Remove this string from the end of the value before parsing. __Note: use `&RPARENs` to indicate `)` if needed__
 

#### Example usage of opening_hours_table 

 A normal opening hours table can be invoked with `{opening_hours_table()}`. A table for e.g. conditional access with opening hours can be `{opening_hours_table(access:conditional, no @ &LPARENS, &RPARENS)}`



### live 

 Downloads a JSON from the given URL, e.g. '{live(example.org/data.json, shorthand:x.y.z, other:a.b.c, shorthand)}' will download the given file, will create an object {shorthand: json[x][y][z], other: json[a][b][c] out of it and will return 'other' or 'json[a][b][c]. This is made to use in combination with tags, e.g. {live({url}, {url:format}, needed_value)} 

name | default | description
------ | --------- | -------------
Url | _undefined_ | The URL to load
Shorthands | _undefined_ | A list of shorthands, of the format 'shorthandname:path.path.path'. separated by ;
path | _undefined_ | The path (or shorthand) that should be returned
 

#### Example usage of live 

 {live({url},{url:format},hour)} {live(https://data.mobility.brussels/bike/api/counts/?request=live&featureID=CB2105,hour:data.hour_cnt;day:data.day_cnt;year:data.year_cnt,hour)}



### canonical 

 Converts a short, canonical value into the long, translated text including the unit. This only works if a `unit` is defined for the corresponding value. The unit specification will be included in the text.  

name | default | description
------ | --------- | -------------
key | _undefined_ | The key of the tag to give the canonical text for
 

#### Example usage of canonical 

 If the object has `length=42`, then `{canonical(length)}` will be shown as **42 meter** (in english), **42 metre** (in french), ...



### export_as_geojson 

 Exports the selected feature as GeoJson-file 

#### Example usage of export_as_geojson 

 `{export_as_geojson()}`



### open_in_iD 

 Opens the current view in the iD-editor 

#### Example usage of open_in_iD 

 `{open_in_iD()}`



### open_in_josm 

 Opens the current view in the JOSM-editor 

#### Example usage of open_in_josm 

 `{open_in_josm()}`



### clear_location_history 

 A button to remove the travelled track information from the device 

#### Example usage of clear_location_history 

 `{clear_location_history()}`



### visualize_note_comments 

 Visualises the comments for notes 

name | default | description
------ | --------- | -------------
commentsKey | comments | The property name of the comments, which should be stringified json
start | 0 | Drop the first 'start' comments
 

#### Example usage of visualize_note_comments 

 `{visualize_note_comments(comments,0)}`



### add_image_to_note 

 Adds an image to a node 

name | default | description
------ | --------- | -------------
Id-key | id | The property name where the ID of the note to close can be found
 

#### Example usage of add_image_to_note 

 `{add_image_to_note(id)}`



### title 

 Shows the title of the popup. Useful for some cases, e.g. 'What is phone number of {title()}?' 

#### Example usage of title 

 `What is the phone number of {title()}`, which might automatically become `What is the phone number of XYZ`.



### maproulette_task 

 Show details of a MapRoulette task 

#### Example usage of maproulette_task 

 `{maproulette_task()}`



### statistics 

 Show general statistics about the elements currently in view. Intended to use on the `current_view`-layer 

#### Example usage of statistics 

 `{statistics()}`



### send_email 

 Creates a `mailto`-link where some fields are already set and correctly escaped. The user will be promted to send the email 

name | default | description
------ | --------- | -------------
to | _undefined_ | Who to send the email to?
subject | _undefined_ | The subject of the email
body | _undefined_ | The text in the email
button_text | _undefined_ | The text shown on the button in the UI
 

#### Example usage of send_email 

 `{send_email(,,,)}`



### multi 

 Given an embedded tagRendering (read only) and a key, will read the keyname as a JSON-list. Every element of this list will be considered as tags and rendered with the tagRendering 

name | default | description
------ | --------- | -------------
key | _undefined_ | The property to read and to interpret as a list of properties
tagrendering | _undefined_ | An entire tagRenderingConfig
 

#### Example usage of multi 

 ```json
{
  "render": {
    "special": {
      "type": "multi",
      "key": "_doors_from_building_properties",
      "tagRendering": {
        "render": "The building containing this feature has a <a href='#{id}'>door</a> of width {entrance:width}"
      }
    }
  }
}
```



### auto_apply 

 A button to run many actions for many features at once. To effectively use this button, you'll need some ingredients: 

  - A target layer with features for which an action is defined in a tag rendering. The following special visualisations support an autoAction: import_way_button, tag_apply
  - A host feature to place the auto-action on. This can be a big outline (such as a city). Another good option for this is the layer 
  - [current_view](./BuiltinLayers.md#current_view)
  - Then, use a calculated tag on the host feature to determine the overlapping object ids
  - At last, add this component
 

name | default | description
------ | --------- | -------------
target_layer | _undefined_ | The layer that the target features will reside in
target_feature_ids | _undefined_ | The key, of which the value contains a list of ids
tag_rendering_id | _undefined_ | The ID of the tagRendering containing the autoAction. This tagrendering will be calculated. The embedded actions will be executed
text | _undefined_ | The text to show on the button
icon | ./assets/svg/robot.svg | The icon to show on the button
 

#### Example usage of auto_apply 

 `{auto_apply(,,,,./assets/svg/robot.svg)}` 

This document is autogenerated from [UI/SpecialVisualizations.ts](https://github.com/pietervdvn/MapComplete/blob/develop/UI/SpecialVisualizations.ts)


 rainbow_crossing_high_zoom 
============================



<img src='https://mapcomplete.osm.be/./assets/themes/rainbow_crossings/crossing.svg' height="100px"> 

A layer showing pedestrian crossings with rainbow paintings






  - This layer is shown at zoomlevel **10** and higher
  - Not visible in the layer selection by default. If you want to make this layer toggable, override `name`




#### Themes using this layer 





  - [rainbow_crossings](https://mapcomplete.osm.be/rainbow_crossings)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dcrossing' target='_blank'>crossing</a>
  - <a href='https://wiki.openstreetmap.org/wiki/Key:crossing:marking' target='_blank'>crossing:marking</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:crossing:marking%3Drainbow' target='_blank'>rainbow</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22crossing%3Amarking%22%3D%22rainbow%22%5D%5B%22highway%22%3D%22crossing%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------





### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### crossing-with-rainbow 



The question is  *Does this crossing has rainbow paintings?*





  - *This crossing has rainbow paintings*  corresponds with  `crossing:marking=rainbow`
  - *No rainbow paintings here*  corresponds with  `not:crossing:marking=rainbow`
  - *No rainbow paintings here*  corresponds with  `crossing:marking!=rainbow`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `highway=crossing`



### questions 



Show the images block at this location

This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/themes/rainbow_crossings/rainbow_crossings.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/themes/rainbow_crossings/rainbow_crossings.json)
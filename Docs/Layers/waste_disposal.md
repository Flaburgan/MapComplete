

 waste_disposal 
================



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/waste_disposal/waste_disposal.svg' height="100px"> 

Waste Disposal Bin, medium to large bin for disposal of (household) waste






  - This layer is shown at zoomlevel **18** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [waste](https://mapcomplete.osm.be/waste)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dwaste_disposal' target='_blank'>waste_disposal</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22waste_disposal%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/access#values) [access](https://wiki.openstreetmap.org/wiki/Key:access) | [string](../SpecialInputElements.md#string) | [yes](https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:access%3Dno) [residents](https://wiki.openstreetmap.org/wiki/Tag:access%3Dresidents)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/location#values) [location](https://wiki.openstreetmap.org/wiki/Key:location) | Multiple choice | [underground](https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground) [indoor](https://wiki.openstreetmap.org/wiki/Tag:location%3Dindoor) [](https://wiki.openstreetmap.org/wiki/Tag:location%3D)




### access 



The question is  *Who can use this waste disposal bin?*

This rendering asks information about the property  [access](https://wiki.openstreetmap.org/wiki/Key:access) 

This is rendered with  `Access: {access}`





  - *This bin can be used by anyone*  corresponds with  `access=yes`
  - *This bin is private*  corresponds with  `access=no`
  - *This bin is only for residents*  corresponds with  `access=residents`




### disposal-location 



The question is  *Where is this container located?*





  - *This is an underground container*  corresponds with  `location=underground`
  - *This container is located indoors*  corresponds with  `location=indoor`
  - *This container is located outdoors*  corresponds with  ``




#### Filters 





id | question | osmTags
---- | ---------- | ---------
public-access.0 | Only public access | access=yes
 

This document is autogenerated from [assets/layers/waste_disposal/waste_disposal.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/waste_disposal/waste_disposal.json)
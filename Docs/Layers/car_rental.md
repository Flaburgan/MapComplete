

 car_rental 
============



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/car_rental/car_rental.svg' height="100px"> 

Places where you can rent a car






  - This layer is shown at zoomlevel **12** and higher




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcar_rental' target='_blank'>car_rental</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22car_rental%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### name 



The question is  *What is the name of this car rental?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This car rental is called {name}`





  - *This car rental has no name*  corresponds with  `noname=yes`




### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





  - *<a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>*  corresponds with  `contact:email~.+`
  - This option cannot be chosen as answer




### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  `contact:phone~.+`
  - This option cannot be chosen as answer




### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes
 

This document is autogenerated from [assets/layers/car_rental/car_rental.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/car_rental/car_rental.json)
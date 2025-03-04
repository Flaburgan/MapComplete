

 playground 
============



<img src='https://mapcomplete.osm.be/./assets/themes/playgrounds/playground.svg' height="100px"> 

Playgrounds






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [playgrounds](https://mapcomplete.osm.be/playgrounds)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:leisure' target='_blank'>leisure</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dplayground' target='_blank'>playground</a>
  - playground!=forest


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22leisure%22%3D%22playground%22%5D%5B%22playground%22!%3D%22forest%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/surface#values) [surface](https://wiki.openstreetmap.org/wiki/Key:surface) | [string](../SpecialInputElements.md#string) | [grass](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dgrass) [sand](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsand) [woodchips](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dwoodchips) [paving_stones](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dpaving_stones) [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/lit#values) [lit](https://wiki.openstreetmap.org/wiki/Key:lit) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/min_age#values) [min_age](https://wiki.openstreetmap.org/wiki/Key:min_age) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/max_age#values) [max_age](https://wiki.openstreetmap.org/wiki/Key:max_age) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [sunrise-sunset](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3Dsunrise-sunset) [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### playground-surface 



The question is  *Which is the surface of this playground?<br/><i>If there are multiple, select the most occuring one</i>*

This rendering asks information about the property  [surface](https://wiki.openstreetmap.org/wiki/Key:surface) 

This is rendered with  `The surface is <b>{surface}</b>`





  - *The surface is <b>grass</b>*  corresponds with  `surface=grass`
  - *The surface is <b>sand</b>*  corresponds with  `surface=sand`
  - *The surface consist of <b>woodchips</b>*  corresponds with  `surface=woodchips`
  - *The surface is <b>paving stones</b>*  corresponds with  `surface=paving_stones`
  - *The surface is <b>asphalt</b>*  corresponds with  `surface=asphalt`
  - *The surface is <b>concrete</b>*  corresponds with  `surface=concrete`
  - *The surface is <b>unpaved</b>*  corresponds with  `surface=unpaved`
  - This option cannot be chosen as answer
  - *The surface is <b>paved</b>*  corresponds with  `surface=paved`
  - This option cannot be chosen as answer




### playground-lit 



The question is  *Is this playground lit at night?*





  - *This playground is lit at night*  corresponds with  `lit=yes`
  - *This playground is not lit at night*  corresponds with  `lit=no`


This tagrendering has labels  `extra`



### playground-min_age 



The question is  *What is the minimum age required to access this playground?*

This rendering asks information about the property  [min_age](https://wiki.openstreetmap.org/wiki/Key:min_age) 

This is rendered with  `Accessible to kids older than {min_age} years`



This tagrendering has labels  `extra`



### playground-max_age 



The question is  *What is the maximum age allowed to access this playground?*

This rendering asks information about the property  [max_age](https://wiki.openstreetmap.org/wiki/Key:max_age) 

This is rendered with  `Accessible to kids of at most {max_age}`



This tagrendering has labels  `extra`



### playground-operator 



The question is  *Who operates this playground?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `Operated by {operator}`





### playground-access 



The question is  *Is this playground accessible to the general public?*





  - *Accessible to the general public*  corresponds with  `access=yes`
  - *This is a <b>paid</b> playground*  corresponds with  `fee=yes`
  - *Only accessible for clients of the operating business*  corresponds with  `access=customers`
  - *Only accessible to students of the school*  corresponds with  `access=students`
  - This option cannot be chosen as answer
  - *Not accessible*  corresponds with  `access=private`
  - *This is a schoolyard - an outdoor area where the pupils can play during their breaks; but it is not accessible to the general public*  corresponds with  `leisure=schoolyard`




### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### playground-email 



The question is  *What is the email address of the playground maintainer?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}'>{email}</a>`





### playground-phone 



The question is  *What is the phone number of the playground maintainer?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





### Playground-wheelchair 



The question is  *Is this playground accessible to wheelchair users?*





  - *Completely accessible for wheelchair users*  corresponds with  `wheelchair=yes`
  - *Limited accessibility for wheelchair users*  corresponds with  `wheelchair=limited`
  - *Not accessible for wheelchair users*  corresponds with  `wheelchair=no`




### playground-opening_hours 



The question is  *When is this playground accessible?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `{opening_hours_table(opening_hours)}`





  - *Accessible from sunrise till sunset*  corresponds with  `opening_hours=sunrise-sunset`
  - *Always accessible*  corresponds with  `opening_hours=24/7`




### questions 



This tagrendering has no question and is thus read-only





### playground-reviews 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/playground/playground.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/playground/playground.json)
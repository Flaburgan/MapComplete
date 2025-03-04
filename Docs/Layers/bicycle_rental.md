

 bicycle_rental 
================



<img src='https://mapcomplete.osm.be/./assets/themes/bicycle_rental/logo.svg' height="100px"> 

Bicycle rental stations






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [bicycle_rental](https://mapcomplete.osm.be/bicycle_rental)
  - [cyclofix](https://mapcomplete.osm.be/cyclofix)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_rental' target='_blank'>bicycle_rental</a>|bicycle_rental~.+|<a href='https://wiki.openstreetmap.org/wiki/Key:service:bicycle:rental' target='_blank'>service:bicycle:rental</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:service:bicycle:rental%3Dyes' target='_blank'>yes</a>|rental~^(.*bicycle.*)$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22bicycle_rental%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22service%3Abicycle%3Arental%22%3D%22yes%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22bicycle_rental%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22rental%22~%22%5E(.*bicycle.*)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/rental#values) [rental](https://wiki.openstreetmap.org/wiki/Key:rental) | [string](../SpecialInputElements.md#string) | [city_bike](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dcity_bike) [ebike](https://wiki.openstreetmap.org/wiki/Tag:rental%3Debike) [bmx](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dbmx) [mtb](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dmtb) [kid_bike](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dkid_bike) [tandem](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dtandem) [racebike](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dracebike) [bike_helmet](https://wiki.openstreetmap.org/wiki/Tag:rental%3Dbike_helmet)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:city_bike#values) [capacity:city_bike](https://wiki.openstreetmap.org/wiki/Key:capacity:city_bike) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:ebike#values) [capacity:ebike](https://wiki.openstreetmap.org/wiki/Key:capacity:ebike) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:kid_bike#values) [capacity:kid_bike](https://wiki.openstreetmap.org/wiki/Key:capacity:kid_bike) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:bmx#values) [capacity:bmx](https://wiki.openstreetmap.org/wiki/Key:capacity:bmx) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:mtb#values) [capacity:mtb](https://wiki.openstreetmap.org/wiki/Key:capacity:mtb) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:bicycle_pannier#values) [capacity:bicycle_pannier](https://wiki.openstreetmap.org/wiki/Key:capacity:bicycle_pannier) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:tandem_bicycle#values) [capacity:tandem_bicycle](https://wiki.openstreetmap.org/wiki/Key:capacity:tandem_bicycle) | [pnat](../SpecialInputElements.md#pnat) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### bicycle_rental_type 



The question is  *What kind of bicycle rental is this?*





  - *This is a shop whose main focus is bicycle rental*  corresponds with  `shop=rental&bicycle_rental=shop`
  - *This is a rental buisiness which rents out various objects and/or vehicles. It rents out bicycles too, but this is not the main focus*  corresponds with  `shop=rental`
  - *This is a shop which sells or repairs bicycles, but also rents out bicycles*  corresponds with  `service:bicycle:rental=yes&shop=bicycle`
  - *This is an automated docking station, where a bicycle is mechanically locked into a structure*  corresponds with  `bicycle_rental=docking_station`
  - *A machine is present which dispenses and accepts keys, eventually after authentication and/or payment. The bicycles are parked nearby*  corresponds with  `bicycle_rental=key_dispensing_machine`
  - *This is a dropoff point, e.g. a reserved parking to place the bicycles which clearly marked as being for the rental service only*  corresponds with  `bicycle_rental=dropoff_point`


This tagrendering is only visible in the popup if the following condition is met: `amenity=bicycle_rental`



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



This tagrendering is only visible in the popup if the following condition is met: `shop~.+|opening_hours~.+`



### payment-options 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  `payment:cash=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dno' target='_blank'>no</a>
  - *Payment cards are accepted here*  corresponds with  `payment:cards=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `shop~.+`



### payment-options-advanced 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  `payment:cash=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dno' target='_blank'>no</a>
  - *Payment cards are accepted here*  corresponds with  `payment:cards=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dno' target='_blank'>no</a>
  - *Payment is done using a dedicated app*  corresponds with  `payment:app=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:app' target='_blank'>payment:app</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:app%3Dno' target='_blank'>no</a>
  - *Payment is done using a membership card*  corresponds with  `payment:membership_card=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:membership_card' target='_blank'>payment:membership_card</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:membership_card%3Dno' target='_blank'>no</a>




### bicycle-types 



The question is  *What kind of bicycles and accessories are rented here?*

This rendering asks information about the property  [rental](https://wiki.openstreetmap.org/wiki/Key:rental) 

This is rendered with  `{rental} is rented here`





  - *Normal city bikes can be rented here*  corresponds with  `rental=city_bike`
  - *Electrical bikes can be rented here*  corresponds with  `rental=ebike`
  - *BMX bikes can be rented here*  corresponds with  `rental=bmx`
  - *Mountainbikes can be rented here*  corresponds with  `rental=mtb`
  - *Bikes for children can be rented here*  corresponds with  `rental=kid_bike`
  - *Tandem bicycles can be rented here*  corresponds with  `rental=tandem`
  - *Race bicycles can be rented here*  corresponds with  `rental=racebike`
  - *Bike helmets can be rented here*  corresponds with  `rental=bike_helmet`


This tagrendering has labels  `bicycle_rental`



### rental-capacity-city_bike 



The question is  *How much city bikes can be rented here?*

This rendering asks information about the property  [capacity:city_bike](https://wiki.openstreetmap.org/wiki/Key:capacity:city_bike) 

This is rendered with  `{capacity:city_bike} city bikes can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*city_bike.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-ebike 



The question is  *How much electrical bikes can be rented here?*

This rendering asks information about the property  [capacity:ebike](https://wiki.openstreetmap.org/wiki/Key:capacity:ebike) 

This is rendered with  `{capacity:ebike} electrical bikes can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*ebike.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-kid_bike 



The question is  *How much bikes for children can be rented here?*

This rendering asks information about the property  [capacity:kid_bike](https://wiki.openstreetmap.org/wiki/Key:capacity:kid_bike) 

This is rendered with  `{capacity:kid_bike} bikes for children can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*kid_bike.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-bmx 



The question is  *How much BMX bikes can be rented here?*

This rendering asks information about the property  [capacity:bmx](https://wiki.openstreetmap.org/wiki/Key:capacity:bmx) 

This is rendered with  `{capacity:bmx} BMX bikes can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*bmx.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-mtb 



The question is  *How much mountainbike can be rented here?*

This rendering asks information about the property  [capacity:mtb](https://wiki.openstreetmap.org/wiki/Key:capacity:mtb) 

This is rendered with  `{capacity:mtb} mountainbike can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*mtb.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-bicycle_pannier 



The question is  *How much bicycle panniers can be rented here?*

This rendering asks information about the property  [capacity:bicycle_pannier](https://wiki.openstreetmap.org/wiki/Key:capacity:bicycle_pannier) 

This is rendered with  `{capacity:bicycle_pannier} bicycle panniers can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*bicycle_pannier.*)$`

This tagrendering has labels  `bicycle_rental`



### rental-capacity-tandem_bicycle 



The question is  *How much tandem can be rented here?*

This rendering asks information about the property  [capacity:tandem_bicycle](https://wiki.openstreetmap.org/wiki/Key:capacity:tandem_bicycle) 

This is rendered with  `{capacity:tandem_bicycle} tandem can be rented here`



This tagrendering is only visible in the popup if the following condition is met: `rental~^(.*tandem_bicycle.*)$`

This tagrendering has labels  `bicycle_rental` 

This document is autogenerated from [assets/layers/bicycle_rental/bicycle_rental.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bicycle_rental/bicycle_rental.json)
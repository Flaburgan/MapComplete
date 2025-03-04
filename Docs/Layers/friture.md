

 friture 
=========



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/food/restaurant.svg' height="100px"> 

A layer showing restaurants and fast-food amenities (with a special rendering for friteries)






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [fritures](https://mapcomplete.osm.be/fritures)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - cuisine~^((.*;)?friture(;.*)?)$
  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfast_food' target='_blank'>fast_food</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant' target='_blank'>restaurant</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22fast_food%22%5D%5B%22cuisine%22~%22%5E((.*%3B)%3Ffriture(%3B.*)%3F)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22restaurant%22%5D%5B%22cuisine%22~%22%5E((.*%3B)%3Ffriture(%3B.*)%3F)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/level#values) [level](https://wiki.openstreetmap.org/wiki/Key:level) | [float](../SpecialInputElements.md#float) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/amenity#values) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity) | Multiple choice | [fast_food](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfast_food) [restaurant](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [designated](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated) [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cuisine#values) [cuisine](https://wiki.openstreetmap.org/wiki/Key:cuisine) | [string](../SpecialInputElements.md#string) | [pizza](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dpizza) [friture](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dfriture) [pasta](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dpasta) [kebab](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dkebab) [sandwich](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dsandwich) [burger](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dburger) [sushi](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dsushi) [coffee](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dcoffee) [italian](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Ditalian) [french](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dfrench) [chinese](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dchinese) [greek](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dgreek) [indian](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dindian) [turkish](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dturkish) [thai](https://wiki.openstreetmap.org/wiki/Tag:cuisine%3Dthai)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/takeaway#values) [takeaway](https://wiki.openstreetmap.org/wiki/Key:takeaway) | Multiple choice | [only](https://wiki.openstreetmap.org/wiki/Tag:takeaway%3Donly) [yes](https://wiki.openstreetmap.org/wiki/Tag:takeaway%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:takeaway%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/delivery#values) [delivery](https://wiki.openstreetmap.org/wiki/Key:delivery) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:delivery%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:delivery%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/diet:vegetarian#values) [diet:vegetarian](https://wiki.openstreetmap.org/wiki/Key:diet:vegetarian) | Multiple choice | [no](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dno) [limited](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dlimited) [yes](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dyes) [only](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/diet:vegan#values) [diet:vegan](https://wiki.openstreetmap.org/wiki/Key:diet:vegan) | Multiple choice | [no](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dno) [limited](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dlimited) [yes](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dyes) [only](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/diet:halal#values) [diet:halal](https://wiki.openstreetmap.org/wiki/Key:diet:halal) | Multiple choice | [no](https://wiki.openstreetmap.org/wiki/Tag:diet:halal%3Dno) [limited](https://wiki.openstreetmap.org/wiki/Tag:diet:halal%3Dlimited) [yes](https://wiki.openstreetmap.org/wiki/Tag:diet:halal%3Dyes) [only](https://wiki.openstreetmap.org/wiki/Tag:diet:halal%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/organic#values) [organic](https://wiki.openstreetmap.org/wiki/Key:organic) | Multiple choice | [no](https://wiki.openstreetmap.org/wiki/Tag:organic%3Dno) [yes](https://wiki.openstreetmap.org/wiki/Tag:organic%3Dyes) [only](https://wiki.openstreetmap.org/wiki/Tag:organic%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/diet:vegetarian#values) [diet:vegetarian](https://wiki.openstreetmap.org/wiki/Key:diet:vegetarian) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:diet:vegetarian%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/diet:vegan#values) [diet:vegan](https://wiki.openstreetmap.org/wiki/Key:diet:vegan) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:diet:vegan%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/organic#values) [organic](https://wiki.openstreetmap.org/wiki/Key:organic) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:organic%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:organic%3Dno) [only](https://wiki.openstreetmap.org/wiki/Tag:organic%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/friture:oil#values) [friture:oil](https://wiki.openstreetmap.org/wiki/Key:friture:oil) | Multiple choice | [vegetable](https://wiki.openstreetmap.org/wiki/Tag:friture:oil%3Dvegetable) [animal](https://wiki.openstreetmap.org/wiki/Tag:friture:oil%3Danimal)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/reusable_packaging:accept#values) [reusable_packaging:accept](https://wiki.openstreetmap.org/wiki/Key:reusable_packaging:accept) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:reusable_packaging:accept%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:reusable_packaging:accept%3Dno) [only](https://wiki.openstreetmap.org/wiki/Tag:reusable_packaging:accept%3Donly)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/service:electricity#values) [service:electricity](https://wiki.openstreetmap.org/wiki/Key:service:electricity) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:service:electricity%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:service:electricity%3Dlimited) [ask](https://wiki.openstreetmap.org/wiki/Tag:service:electricity%3Dask) [no](https://wiki.openstreetmap.org/wiki/Tag:service:electricity%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/dog#values) [dog](https://wiki.openstreetmap.org/wiki/Key:dog) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:dog%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:dog%3Dno) [leashed](https://wiki.openstreetmap.org/wiki/Tag:dog%3Dleashed) [unleashed](https://wiki.openstreetmap.org/wiki/Tag:dog%3Dunleashed)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access#values) [internet_access](https://wiki.openstreetmap.org/wiki/Key:internet_access) | Multiple choice | [wlan](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dwlan) [no](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dno) [terminal](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dterminal) [wired](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dwired)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access:fee#values) [internet_access:fee](https://wiki.openstreetmap.org/wiki/Key:internet_access:fee) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dno) [customers](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dcustomers)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access:ssid#values) [internet_access:ssid](https://wiki.openstreetmap.org/wiki/Key:internet_access:ssid) | [string](../SpecialInputElements.md#string) | [Telekom](https://wiki.openstreetmap.org/wiki/Tag:internet_access:ssid%3DTelekom)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### level 



The question is  *On what level is this feature located?*

This rendering asks information about the property  [level](https://wiki.openstreetmap.org/wiki/Key:level) 

This is rendered with  `Located on the {level}th floor`





  - *Located underground*  corresponds with  `location=underground`
  - This option cannot be chosen as answer
  - *Located on the ground floor*  corresponds with  `level=0`
  - *Located on the ground floor*  corresponds with  ``
  - This option cannot be chosen as answer
  - *Located on the first floor*  corresponds with  `level=1`
  - *Located on the first basement level*  corresponds with  `level=-1`




### Name 



The question is  *What is the name of this restaurant?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `The name of this restaurant is {name}`





### Fastfood vs restaurant 



The question is  *What type of business is this?*





  - *This is a fastfood-business, focused on fast service. If seating is available, these are rather limited and functional.*  corresponds with  `amenity=fast_food`
  - *A <b>restaurant</b>, focused on creating a nice experience where one is served at the table*  corresponds with  `amenity=restaurant`




### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





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




### payment-options 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  `payment:cash=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dno' target='_blank'>no</a>
  - *Payment cards are accepted here*  corresponds with  `payment:cards=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dno' target='_blank'>no</a>




### wheelchair-access 



The question is  *Is this place accessible with a wheelchair?*





  - *This place is specially adapted for wheelchair users*  corresponds with  `wheelchair=designated`
  - *This place is easily reachable with a wheelchair*  corresponds with  `wheelchair=yes`
  - *It is possible to reach this place in a wheelchair, but it is not easy*  corresponds with  `wheelchair=limited`
  - *This place is not reachable with a wheelchair*  corresponds with  `wheelchair=no`




### Cuisine 



The question is  *Which food is served here?*

This rendering asks information about the property  [cuisine](https://wiki.openstreetmap.org/wiki/Key:cuisine) 

This is rendered with  `This place mostly serves {cuisine}`





  - *This is a pizzeria*  corresponds with  `cuisine=pizza`
  - *This is a friture*  corresponds with  `cuisine=friture`
  - *Mainly serves pasta*  corresponds with  `cuisine=pasta`
  - *This is kebab shop*  corresponds with  `cuisine=kebab`
  - *This is a sandwichbar*  corresponds with  `cuisine=sandwich`
  - *Burgers are served here*  corresponds with  `cuisine=burger`
  - *Sushi is served here*  corresponds with  `cuisine=sushi`
  - *Coffee is served here*  corresponds with  `cuisine=coffee`
  - *This is an italian restaurant (which serves more then pasta and pizza)*  corresponds with  `cuisine=italian`
  - *French dishes are served here*  corresponds with  `cuisine=french`
  - *Chinese dishes are served here*  corresponds with  `cuisine=chinese`
  - *Greek dishes are served here*  corresponds with  `cuisine=greek`
  - *Indian dishes are served here*  corresponds with  `cuisine=indian`
  - *Turkish dishes are served here*  corresponds with  `cuisine=turkish`
  - *Thai dishes are served here*  corresponds with  `cuisine=thai`




### Takeaway 



The question is  *Does this place offer take-away?*





  - *This is a take-away only business*  corresponds with  `takeaway=only`
  - *Take-away is possible here*  corresponds with  `takeaway=yes`
  - *Take-away is not possible here*  corresponds with  `takeaway=no`




### delivery 



The question is  *Delivers {title()} their food at home?*





  - *This business does home delivery (eventually via a third party)*  corresponds with  `delivery=yes`
  - *This business does not deliver at home*  corresponds with  `delivery=no`




### Vegetarian (no friture) 



The question is  *Does this restaurant have a vegetarian option?*





  - *No vegetarian options are available*  corresponds with  `diet:vegetarian=no`
  - *Some vegetarian options are available*  corresponds with  `diet:vegetarian=limited`
  - *Vegetarian options are available*  corresponds with  `diet:vegetarian=yes`
  - *All dishes are vegetarian*  corresponds with  `diet:vegetarian=only`




### Vegan (no friture) 



The question is  *Does this business serve vegan meals?*





  - *No vegan options available*  corresponds with  `diet:vegan=no`
  - *Some vegan options are available*  corresponds with  `diet:vegan=limited`
  - *Vegan options are available*  corresponds with  `diet:vegan=yes`
  - *All dishes are vegan*  corresponds with  `diet:vegan=only`




### halal (no friture) 



The question is  *Does this restaurant offer a halal menu?*





  - *There are no halal options available*  corresponds with  `diet:halal=no`
  - *There is a small halal menu*  corresponds with  `diet:halal=limited`
  - *There is a halal menu*  corresponds with  `diet:halal=yes`
  - *Only halal options are available*  corresponds with  `diet:halal=only`




### organic (no friture) 



The question is  *Does this restaurant offer organic food?*





  - *There are no organic options available*  corresponds with  `organic=no`
  - *There is an organic menu*  corresponds with  `organic=yes`
  - *Only organic options are available*  corresponds with  `organic=only`




### friture-vegetarian 



The question is  *Does this fries shop have vegetarian snacks?*





  - *Vegetarian snacks are available*  corresponds with  `diet:vegetarian=yes`
  - *Only a small selection of snacks are vegetarian*  corresponds with  `diet:vegetarian=limited`
  - *No vegetarian snacks are available*  corresponds with  `diet:vegetarian=no`


This tagrendering is only visible in the popup if the following condition is met: `cuisine=friture`



### friture-vegan 



The question is  *Does this fries shop have vegan snacks?*





  - *Vegan snacks are available*  corresponds with  `diet:vegan=yes`
  - *A small selection of vegan snacks are available*  corresponds with  `diet:vegan=limited`
  - *No vegan snacks are available*  corresponds with  `diet:vegan=no`


This tagrendering is only visible in the popup if the following condition is met: `cuisine=friture`



### friture-organic 



The question is  *Does this fries shop offer organic snacks?*





  - *Organic snacks are available*  corresponds with  `organic=yes`
  - *No organic snacks are available*  corresponds with  `organic=no`
  - *Only organic snacks are available*  corresponds with  `organic=only`


This tagrendering is only visible in the popup if the following condition is met: `cuisine=friture`



### friture-oil 



The question is  *Does this fries shop use vegetable or animal oil for cooking?*





  - *The frying is done with vegetable oil*  corresponds with  `friture:oil=vegetable`
  - *The frying is done with animal oil*  corresponds with  `friture:oil=animal`


This tagrendering is only visible in the popup if the following condition is met: `cuisine=friture`



### friture-take-your-container 



The question is  *If you bring your own container (such as a cooking pot and small pots), is it used to package your order?<br/>*





  - *You can bring <b>your own containers</b> to get your order, saving on single-use packaging material and thus waste*  corresponds with  `reusable_packaging:accept=yes`
  - *Bringing your own container is <b>not allowed</b>*  corresponds with  `reusable_packaging:accept=no`
  - *You <b>must</b> bring your own container to order here.*  corresponds with  `reusable_packaging:accept=only`


This tagrendering is only visible in the popup if the following condition is met: `cuisine=friture`



### service:electricity 



The question is  *Does this amenity have electrical outlets, available to customers when they are inside?*





  - *There are plenty of domestic sockets available to customers seated indoors, where they can charge their electronics*  corresponds with  `service:electricity=yes`
  - *There are a few domestic sockets available to customers seated indoors, where they can charge their electronics*  corresponds with  `service:electricity=limited`
  - *There are no sockets available indoors to customers, but charging might be possible if the staff is asked*  corresponds with  `service:electricity=ask`
  - *There are a no domestic sockets available to customers seated indoors*  corresponds with  `service:electricity=no`




### dog-access 



The question is  *Are dogs allowed in this business?*





  - *Dogs are allowed*  corresponds with  `dog=yes`
  - *Dogs are <b>not</b> allowed*  corresponds with  `dog=no`
  - *Dogs are allowed, but they have to be leashed*  corresponds with  `dog=leashed`
  - *Dogs are allowed and can run around freely*  corresponds with  `dog=unleashed`




### internet 



The question is  *Does this place offer internet access?*





  - *This place offers wireless internet access*  corresponds with  `internet_access=wlan`
  - *This place <b>does not</b> offer internet access*  corresponds with  `internet_access=no`
  - *This place offers internet access*  corresponds with  `internet_access=yes`
  - This option cannot be chosen as answer
  - *This place offers internet access via a terminal or computer*  corresponds with  `internet_access=terminal`
  - *This place offers wired internet access*  corresponds with  `internet_access=wired`




### internet-fee 



The question is  *Is there a fee for internet access?*





  - *There is a fee for the internet access at this place*  corresponds with  `internet_access:fee=yes`
  - *Internet access is free at this place*  corresponds with  `internet_access:fee=no`
  - *Internet access is free at this place, for customers only*  corresponds with  `internet_access:fee=customers`


This tagrendering is only visible in the popup if the following condition is met: `internet_access!=no&internet_access~.+`



### internet-ssid 



The question is  *What is the network name for the wireless internet access?*

This rendering asks information about the property  [internet_access:ssid](https://wiki.openstreetmap.org/wiki/Key:internet_access:ssid) 

This is rendered with  `The network name is <b>{internet_access:ssid}</b>`





  - *Telekom*  corresponds with  `internet_access:ssid=Telekom`


This tagrendering is only visible in the popup if the following condition is met: `internet_access=wlan`



### reviews 



Shows the reviews module (including the possibility to leave a review)

This tagrendering has no question and is thus read-only





### questions 



Show the images block at this location

This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only





#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes




id | question | osmTags
---- | ---------- | ---------
vegetarian.0 | Has a vegetarian menu | diet:vegetarian=yes\|diet:vegetarian=only|diet:vegan=yes|diet:vegan=only




id | question | osmTags
---- | ---------- | ---------
vegan.0 | Has a vegan menu | diet:vegan=yes\|diet:vegan=only




id | question | osmTags
---- | ---------- | ---------
halal.0 | Has a halal menu | diet:halal=yes\|diet:halal=only




id | question | osmTags
---- | ---------- | ---------
has_organic.0 | Has organic options | organic=yes\|organic=only




id | question | osmTags
---- | ---------- | ---------
accepts_cash.0 | Accepts cash | payment:cash=yes




id | question | osmTags
---- | ---------- | ---------
accepts_cards.0 | Accepts payment cards | payment:cards=yes
 

This document is autogenerated from [assets/themes/fritures/fritures.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/themes/fritures/fritures.json)
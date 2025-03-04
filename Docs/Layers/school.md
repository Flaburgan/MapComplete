

 school 
========



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/school/school.svg' height="100px"> 

Schools giving primary and secondary education and post-secondary, non-tertiary education. Note that this level of education does not imply an age of the pupiles






  - This layer is shown at zoomlevel **12** and higher
  - This layer will automatically load  [school](./school.md)  into the layout as it depends on it:  a calculated tag loads features from this layer (calculatedTag[0] which calculates the value for _enclosing)
  - This layer is needed as dependency for layer [school](#school)




#### Themes using this layer 





  - [education](https://mapcomplete.osm.be/education)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool' target='_blank'>school</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22school%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity#values) [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/school#values) [school](https://wiki.openstreetmap.org/wiki/Key:school) | Multiple choice | [kindergarten](https://wiki.openstreetmap.org/wiki/Tag:school%3Dkindergarten) [primary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dprimary) [secondary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dsecondary) [lower_secondary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dlower_secondary) [middle_secondary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dmiddle_secondary) [upper_secondary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dupper_secondary) [post_secondary](https://wiki.openstreetmap.org/wiki/Tag:school%3Dpost_secondary)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/school:gender#values) [school:gender](https://wiki.openstreetmap.org/wiki/Key:school:gender) | Multiple choice | [mixed](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dmixed) [separated](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dseparated) [male](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dmale) [female](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dfemale)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/school:for#values) [school:for](https://wiki.openstreetmap.org/wiki/Key:school:for) | [string](../SpecialInputElements.md#string) | [mainstream](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dmainstream) [adults](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dadults) [autism](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dautism) [learning_disabilities](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dlearning_disabilities) [blind](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dblind) [deaf](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Ddeaf) [disabilities](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Ddisabilities) [special_needs](https://wiki.openstreetmap.org/wiki/Tag:school:for%3Dspecial_needs)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 




### school-name 



The question is  *What is the name of this school?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This school is named {name}`





### capacity 



The question is  *How much students can at most enroll in this school?*

This rendering asks information about the property  [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) 

This is rendered with  `This school can enroll at most {capacity} students`





### education-level-belgium 



The question is  *What level of education is given on this school?*





  - *This is a school with a kindergarten section where young kids receive some education which prepares reading and writing.*  corresponds with  `school=kindergarten`
  - *This is a school where one learns primary skills such as basic literacy and numerical skills. <div class='subtle'>Pupils typically enroll from 6 years old till 12 years old</div>*  corresponds with  `school=primary`
  - *This is a secondary school which offers all grades*  corresponds with  `school=secondary`
  - *This is a secondary school which does <i>not</i> have all grades, but offers <b>first and second</b> grade*  corresponds with  `school=lower_secondary`
  - *This is a secondary school which does <i>not</i> have all grades, but offers <b>third and fourth</b> grade*  corresponds with  `school=middle_secondary`
  - *This is a secondary school which does <i>not</i> have all grades, but offers <b>fifth and sixth</b> grade*  corresponds with  `school=upper_secondary`
  - *This school offers post-secondary education (e.g. a seventh or eight specialisation year)*  corresponds with  `school=post_secondary`


This tagrendering is only visible in the popup if the following condition is met: `_country=be`



### gender 



The question is  *Which genders can enroll at this school?*





  - *Both boys and girls can enroll here and have classes together*  corresponds with  `school:gender=mixed`
  - *Both boys and girls can enroll here but they are separated (e.g. they have lessons in different classrooms or at different times)*  corresponds with  `school:gender=separated`
  - *This is a boys only-school*  corresponds with  `school:gender=male`
  - *This is a girls-only school*  corresponds with  `school:gender=female`




### target-audience 



The question is  *Does this school target students with a special need? Which structural facilities does this school have?<div class='subtle'>Ad-hoc *

This rendering asks information about the property  [school:for](https://wiki.openstreetmap.org/wiki/Key:school:for) 

This is rendered with  `This school has facilities for students with {school:for}`





  - *This is a school where students study skills at their age-adequate level. <div>There are little or no special facilities to cater for students with special needs or facilities are ad-hoc</div>*  corresponds with  ``
  - This option cannot be chosen as answer
  - *This is a school for students without special needs<div class='subtle'>This includes students who can follow the courses with small, ad hoc measurements</div>*  corresponds with  `school:for=mainstream`
  - *This is a school where adults are taught skills on the level as specified.*  corresponds with  `school:for=adults`
  - *This is a school for students with autism*  corresponds with  `school:for=autism`
  - *This is a school for students with learning disabilities*  corresponds with  `school:for=learning_disabilities`
  - *This is a school for blind students or students with sight impairments*  corresponds with  `school:for=blind`
  - *This is a school for deaf students or students with hearing impairments*  corresponds with  `school:for=deaf`
  - *This is a school for students with disabilities*  corresponds with  `school:for=disabilities`
  - *This is a school for students with special needs*  corresponds with  `school:for=special_needs`


This tagrendering is only visible in the popup if the following condition is met: `school:for~.+`



### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  `contact:phone~.+`
  - This option cannot be chosen as answer




### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





  - *<a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>*  corresponds with  `contact:email~.+`
  - This option cannot be chosen as answer




### school-language 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/school/school.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/school/school.json)
var args = arguments[0] || {};
var people = Alloy.Collections.people;
//var personName = args.personName
var alloyId = args.alloyId;
//var personalData = people.get(alloyId).get("birthday");

var personalData = people.get(alloyId).toJSON();

//alert(personalData.name);
Ti.API.debug(personalData);

$.imageFace.hide();

$.name.setText(personalData.name);
$.birthday.setText(personalData.birthday);
$.gender.setText(personalData.gender);
$.phoneNumber.setText(personalData.phoneNumber);
$.address.setText(personalData.address);
$.job.setText(personalData.job);

if(personalData.gender==='male'){
	
	$.imageFace.show();//set face
}else if(personalData.gender==='female'){
	
}else{
	
}

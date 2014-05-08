var args = arguments[0] || {};
var people = Alloy.Collections.people;
//var personName = args.personName
var alloyId = args.alloyId;
//var personalData = people.get(alloyId).get("birthday");

var personalData = people.get(alloyId).toJSON();

//Ti.API.debug(personalData);

$.imageGlasses.hide();



//--------set text data on the detail page--------//
$.name.setText(personalData.name);
$.birthday.setText(personalData.birthday);
$.gender.setText(personalData.gender);
$.phoneNumber.setText(personalData.phoneNumber);
$.address.setText(personalData.address);
$.job.setText(personalData.job);



//--------set image data on the detail page--------//
$.imageHair.image = personalData.hairstyle + "_" + personalData.hairColor + ".png";
$.imageEye.image = personalData.eyeColor;
$.imageFace.image = personalData.bodyShape + "_" + personalData.skinColor;
$.imageCloth.image = personalData.cloth;

if(personalData.glasses===1){
	$.imageGlasses.show();
};





var clickEdit = function(e){
		var win = Alloy.createController('add',{
		personalData: personalData
		
		
	}).getView();
	Alloy.Globals.activeTab.openWindow(win);
};

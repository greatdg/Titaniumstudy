var args = arguments[0] || {};
var people = Alloy.Collections.people;
//var personName = args.personName
var alloyId = args.alloyId;
//var personalData = people.get(alloyId).get("birthday");



//Ti.API.debug(personalData);
// $.detailWin.addEventListener('focus', function(e){
// 
// });

$.imageGlasses.hide();

Titanium.App.addEventListener('doneEdit', function(e){
	Ti.API.debug(alloyId);
	personalDetail(alloyId);

});

//--------set text data on the detail page--------//
var personalDetail = function(id){
	var personalData = people.get(id).toJSON();
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
};

personalDetail(alloyId);





var clickEdit = function(e){
		var win = Alloy.createController('detailEdit',{
		alloyId: alloyId
	}).getView();
	Alloy.Globals.activeTab.openWindow(win);
};

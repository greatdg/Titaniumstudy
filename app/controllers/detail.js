var args = arguments[0] || {};
var people = Alloy.Collections.people;
var alloyId = args.alloyId;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";

// 
// $.imageGlasses.hide();
// 
Titanium.App.addEventListener("doneEdit", function(e){
	personalDetail(alloyId);
});
// 
//--------set text data on the detail page--------//
var personalDetail = function(id){
	var personalData = people.get(id).toJSON();
	Ti.API.debug(personalData);
	$.name.setText(personalData.name);
	$.birthday.setText(personalData.birthday);
	$.gender.setText(personalData.gender);
	$.phoneNumber.setText(personalData.phoneNumber);
	$.address1.setText(personalData.address1);
	$.address2.setText(personalData.address2);
	$.address3.setText(personalData.address3);
	$.job.setText(personalData.job);
	$.email.setText(personalData.email);
	$.facePic.image=imageRootPath+id +".jpg";

	
	//create view of the custom fields
	//Ti.API.debug(personalData.custom);
		if(personalData.custom && personalData.custom.length > 0){
		
		var splitFields = personalData.custom.split('##');
		
		for(var i=0; i<splitFields.length; i++){
			var splitField = splitFields[i].split('&&');
			var field=Alloy.createController("customfield",{
			name:splitField[0],
			field:splitField[1],	
		}).getView();	
			
			$.lowerView.add(field);
		}
	}
		else{
			
			$.customAddView.visible="false";	
			$.scrollView.visible="true";	
			
		}

};

$.detail.addEventListener('focus', function(e){
	personalDetail(alloyId);
});



var clickEdit = function(e){
		var win = Alloy.createController("detailEdit",{
		alloyId: alloyId
	}).getView();
	Alloy.Globals.activeTab.openWindow(win);
};

var personalData = people.get(alloyId).toJSON();

var phoneClick = function(e){
	
	Titanium.Platform.openURL("tel:" + personalData.phoneNumber);
};

var emailClick = function(e){
	Titanium.Platform.openURL("mailto:" + personalData.email);
};

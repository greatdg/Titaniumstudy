var args = arguments[0] || {};
var people = Alloy.Collections.people;
var alloyId = args.alloyId;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";

function checkAddress(obj, txt) {
	if( txt && txt.length > 0 ) {
		obj.visible = true;
		obj.setText(txt);
		return true;
	} else {		
		obj.visible = false;
		return false;
	}
}
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

	if( checkAddress($.address3, personalData.address3) ) {
		$.viewAddr3.height = Ti.UI.SIZE;
	} else {
		$.viewAddr3.height = 0;
	}

	if( checkAddress($.address2, personalData.address2) ) {
		$.viewAddr2.height = Ti.UI.SIZE;	
	} else {
		$.viewAddr2.height = 0;
	}

	if( checkAddress($.address1, personalData.address1) ) {

	}

	
	$.name.setText(personalData.name);
	$.birthday.setText(personalData.birthday);
	$.gender.setText(personalData.gender);

	$.phoneNumber.setText(personalData.phoneNumber);

	$.job.setText(personalData.job);
	$.email.setText(personalData.email);
	$.facePic.image=imageRootPath+id +".jpg";

	
	//create view of the custom fields
	//Ti.API.debug(personalData.custom);
		if(personalData.custom && personalData.custom.length > 0){
		
		var splitFields = personalData.custom.split('##');
		
		for(var i=0; i<splitFields.length-1; i++){
			var splitField = splitFields[i].split('&&');
			var field=Alloy.createController("detailCustomField",{
			name:splitField[0],
			field:splitField[1],	
		}).getView();	
			
			$.addViewField.add(field);
		}
	}
		else{
			
			$.scrollView.visible="true";	
			
		}

};

$.detail.addEventListener('blur', function(e) {
	var c = $.addViewField.getChildren();
	for(var i=0;i<c.length;i++) {
		$.addViewField.remove(c[i]);
	}
});

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

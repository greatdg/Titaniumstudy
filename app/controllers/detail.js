var args = arguments[0] || {};
var people = Alloy.Collections.people;
var alloyId = args.alloyId;

// 
// $.imageGlasses.hide();
// 
Titanium.App.addEventListener("doneEdit", function(e){
	Ti.API.debug(alloyId);
	personalDetail(alloyId);

});
// 
//--------set text data on the detail page--------//
var personalDetail = function(id){
	var personalData = people.get(id).toJSON();
	
	$.name.setText(personalData.name);
	$.birthday.setText(personalData.birthday);
	$.gender.setText(personalData.gender);
	$.phoneNumber.setText(personalData.phoneNumber);
	$.address1.setText(personalData.address1);
	$.address2.setText(personalData.address2);
	$.address3.setText(personalData.address3);
	$.job.setText(personalData.job);
	
	//create view of the custom fields
	
		if(personalData.custom !==""){
		$.customAdd.value="test"

		var title = "test",
			content = "test";
		
		
		var field=Alloy.createController("customfield",{
			name:title,
			field:content,	
		}).getView();	
			
			$.lowerView.add(field);




	}
		else{
			// alert("Please input category title");
			$.customAddView.visible="false";	
			$.scrollView.visible="true";	
			
		}

};


 
personalDetail(alloyId);

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

var args = arguments[0] || {};
var customAddNumber=1 ;
var alloyId = args.alloyId;
// Ti.API.debug(alloyId);
var people = Alloy.Collections.people;

$.detailEdit.addEventListener('focus', function(e){
	people.fetch();
});
var personalData = people.get(alloyId).toJSON();

	$.nameEdit.value= personalData.name;
	$.genderEdit.value= personalData.gender;	
	$.bdayEdit.value= personalData.birthday;
	$.phoneEdit.value = personalData.phoneNumber;

	$.addressEdit.value= personalData.address;
	$.jobEdit.value=personalData.job;	
	$.customEdit.value="";

	$.hairStyle.value=personalData.hairStyle;	
	$.hairColor.value=personalData.hairColor;	
		
	$.skinColor.value=personalData.skinColor;		
	$.faceShape.value=personalData.faceShape;								
	$.eyeShape.value=personalData.eyeShape;			
		
	$.extraGlasses.value=personalData.extraGalsses;		
	$.extraMustache.value=personalData.extraMustache;	
	$.extraExtra.value=personalData.extraExtra;			

	changePic();
		
// });

function editDone(){
	if($.nameEdit.value!=""){
		var model = people.get(alloyId);
		model.save({
			name:$.nameEdit.value,
			gender:$.genderEdit.value,
			birthday:$.bdayEdit.value,
			address:$.addressEdit.value,
			job:$.jobEdit.value,	
			custom:	$.customEdit.value,
			phoneNumber: $.phoneEdit.value,
	
			hairStyle:$.hairStyle.value,	
			hairColor:$.hairColor.value,
			
			skinColor:$.skinColor.value,	
			faceShape:$.faceShape.value,							
			eyeShape:$.eyeShape.value,		
			
			extraGlassess:$.extraGlasses.value,	
			extraMustache:$.extraMustache.value,
			extraExtra:$.extraExtra.value,			
		});
		 //Ti.API.debug(selectModel);
		 //Titanium.App.fireEvent('doneEdit');
		var win = Alloy.createController('detail',{
		alloyId: alloyId
	}).getView();
	Alloy.Globals.activeTab.openWindow(win);
	}else{
		alert("Please input name");};
};

$.genderEdit.addEventListener("click",function(e){
	$.nameEdit.blur();
	$.phoneEdit.blur();
	$.addressEdit.blur();
	$.address2Edit.blur();
	$.viewGenderPicker.visible="true";
	$.lowerView.visible="false";	
	$.done.visible="true";
});

$.genderPicker.addEventListener('change', function(e) {
	$.genderEdit.value = e.selectedValue[0];
});


$.done.addEventListener("click",function(e){
	$.lowerView.visible="true";	
	$.viewGenderPicker.visible="false";	
	$.done.visible="false";	
});



// Image editing follows

$.btn_imageEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="true";	
	$.faceImagePicker.visible="true";
});

$.btn_doneEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";	
	closePickers();
	$.btn_imageEdit.visible="true";
});

function changePic(){
	$.picName.text=$.skinColor.value+"_"+$.faceShape.value +"_"+$.eyeShape.value;
	$.picHairName.text=$.hairStyle.value+"_"+$.hairColor.value;	
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value +"_"+$.extraExtra.value;			
}


function closePickers(){
	$.faceImagePicker.visible="false";
	$.hairImagePicker.visible="false";
	$.extraImagePicker.visible="false";							
}

// Face Choice

$.btn_faceEditCategory.addEventListener("click",function(e){
	closePickers();
	$.faceImagePicker.visible="true";	
});

$.faceImagePicker.addEventListener('change', function(e) {
	$.skinColor.value = e.selectedValue[0];
	$.faceShape.value = e.selectedValue[1];
	$.eyeShape.value = e.selectedValue[2];	
	changePic();			
});



// Hair Choice

$.btn_hairEditCategory.addEventListener("click",function(e){
	closePickers();	
	$.hairImagePicker.visible="true";	
});

$.hairImagePicker.addEventListener('change', function(e) {
	$.hairStyle.value = e.selectedValue[0];
	$.hairColor.value = e.selectedValue[1];	
	changePic();
});


// Extra Choice

$.btn_extraEditCategory.addEventListener("click",function(e){
	closePickers();
	$.extraImagePicker.visible="true";	
});

$.extraImagePicker.addEventListener('change', function(e) {
	$.extraGlasses.value = e.selectedValue[0];
	$.extraMustache.value = e.selectedValue[1];
	$.extraExtra.value = e.selectedValue[2];
	changePic();			
});









function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


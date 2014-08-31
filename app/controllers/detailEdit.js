var args = arguments[0] || {};
var customAddNumber=1 ;
var alloyId = args.alloyId;
// Ti.API.debug(alloyId);
var people = Alloy.Collections.people;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";
var personalData = people.get(alloyId).toJSON();
var customField = [];

$.detailEdit.addEventListener('focus', function(e){
	people.fetch();
});

if(personalData.custom && personalData.custom.length > 0){
		
		var splitFields = personalData.custom.split('##');
		
		for(var i=0; i<splitFields.length-1; i++){
			var splitField = splitFields[i].split('&&');
			var field=Alloy.createController("detailEditCustomField",{
				name:splitField[0],
				field:splitField[1],	
			}).getView();	
				
			$.addViewField.add(field);
		}
	}else{
	$.scrollView.visible="true";}




	$.nameEdit.value= personalData.name;
	$.genderEdit.value= personalData.gender;	
	$.bdayEdit.value= personalData.birthday;
	$.phoneEdit.value = personalData.phoneNumber;
	$.addressEdit.value= personalData.address1;
	$.address2Edit.value= personalData.address2;
	$.address3Edit.value= personalData.address3;
	$.jobEdit.value=personalData.job;	
	$.hairStyle.value=personalData.hairStyle;	
	$.hairColor.value=personalData.hairColor;			
	$.skinColor.value=personalData.skinColor;		
	$.faceShape.value=personalData.faceShape;								
	$.eyeShape.value=personalData.eyeShape;					
	$.extraGlasses.value=personalData.extraGalsses;		
	$.extraMustache.value=personalData.extraMustache;		
	$.emailEdit.value = personalData.email;

		

	changePic();
		


function editDone(){
	var customEditValue="";
	var customChildren = $.addViewField.getChildren();
	for(var i=0;i<customChildren.length;i++) {
		var field = customChildren[i]
		,	view = field.getChildren()[1]
		,	key = view.getChildren()[0].value
		,	value = view.getChildren()[2].value;
		customEditValue = customEditValue + key + "&&" + value + "##" ;
}
	

	if($.nameEdit.value!=""){
		var model = people.get(alloyId);
		model.save({
			name:$.nameEdit.value,
			gender:$.genderEdit.value,
			birthday:$.bdayEdit.value,
			address:$.addressEdit.value,
			job:$.jobEdit.value,	
			custom:	customEditValue,
			phoneNumber: $.phoneEdit.value,
			email: $.emailEdit.value,
			address1: $.addressEdit.value,
			address2: $.address2Edit.value,
			address3: $.address3Edit.value,
	
			hairStyle:$.hairStyle.value,	
			hairColor:$.hairColor.value,
			
			skinColor:$.skinColor.value,	
			faceShape:$.faceShape.value,							
			eyeShape:$.eyeShape.value,		
			
			extraGlassess:$.extraGlasses.value,	
			extraMustache:$.extraMustache.value,
		});

	$.detailEdit.close();
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
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value;			
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
	changePic();			
});

$.btn_addMore.addEventListener("click",function(e){	
			
	$.customAddView.visible="true";
	$.customAddCategory.value="";
	$.customAddContent.value="";		
});	


$.doneCustomAdd.addEventListener("click",function(e){
	if($.customAddCategory.value !==""){
		$.customAddCategory.blur();
		$.customAddContent.blur();
		var title = $.customAddCategory.value,
			content = $.customAddContent.value;
		var field=Alloy.createController("detailEditCustomField",{
				name:title,
				field:content,	
			}).getView();	
		
		$.addViewField.add(field);
		$.customAddView.visible="false";	

	}else{
			// alert("Please input category title");
			$.customAddView.visible="false";	
			$.customAddCategory.blur();
			$.customAddContent.blur();
			
		}		
});


function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


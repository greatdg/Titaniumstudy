var args = arguments[0] || {};
var customAddNumber=1 ;
var alloyId = args.alloyId;
// Ti.API.debug(alloyId);
var people = Alloy.Collections.people;
var personalData = people.get(alloyId).toJSON();
// var field=Alloy.createController("customfield",{
	// name:"",
	// field:"",	
	// }).getView();	
// 			
	// $.lowerView.add(field);


// $.editWin.addEventListener("focus",function(e){
	$.nameAdd.value= personalData.name;
	$.genderAdd.value= personalData.gender;	
	$.bdayAdd.value= personalData.birthday;

	$.addressAdd.value= personalData.address;
	$.jobAdd.value=personalData.job;	
	$.customAdd.value="";

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

function addItem(){
	if($.nameAdd.value!=""){
		var model = people.get(alloyId);
		model.save({
			name:$.nameAdd.value,
			gender:$.genderAdd.value,
			birthday:$.bdayAdd.value,
			address:$.addressAdd.value,
			job:$.jobAdd.value,	
			custom:	$.customAdd.value,
			phoneNumber: $.phoneAdd.value,
	
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
		 Titanium.App.fireEvent('doneEdit');
	}
	else { alert("Please input name")};
};

$.genderAdd.addEventListener("click",function(e){
	$.nameAdd.blur();
	$.phoneAdd.blur();
	$.addressAdd.blur();
	$.address2Add.blur();
	$.viewGenderPicker.visible="true";
	$.lowerView.visible="false";	
	$.done.visible="true";
});

$.genderPicker.addEventListener('change', function(e) {
	$.genderAdd.value = e.selectedValue[0];
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


$.btn_addMore.addEventListener("click",function(e){	
	$.scrollView.visible="false";		
	$.customAddView.visible="true";
	$.customAddCategory.value="";
	$.customAddContent.value="";	

	// var elements = $.lowerView.getChildren();
	// Ti.API.info(elements);
	//$.lowerView.remove(field);	
	
	
	
	
	
});	
	

$.doneCustomAdd.addEventListener("click",function(e){
	if($.customAddCategory.value !==""){
		$.customAdd.value=$.customAdd.value+ $.customAddCategory.value + "&&" + $.customAddContent.value + "##" ;

		$.customAddCategory.blur();
		$.customAddContent.blur();
		//	alert($.customAdd.value);

		var title = $.customAddCategory.value,
			content = $.customAddContent.value;
		
		
		var field=Alloy.createController("customfield",{
			name:title,
			field:content,	
		}).getView();	
			
			$.lowerView.add(field);

		$.customAddView.visible="false";	
		$.scrollView.visible="true";	


	}
		else{
			// alert("Please input category title");
			$.customAddView.visible="false";	
			$.scrollView.visible="true";	
			
		}		
});




function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


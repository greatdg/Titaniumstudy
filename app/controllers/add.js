var args = arguments[0] || {};

$.addWin.addEventListener("focus",function(e){
	$.nameAdd.value="";
	$.genderAdd.value="";	
	$.bdayAdd.value="";


	$.addressAdd.value="";
	// $.job.value="";	
	// $custom.value="";

	$.hairStyle.value="default";	
	$.hairColor.value="default";	
		
	$.skinColor.value="default";		
	$.faceShape.value="default";								
	$.eyeShape.value="default";			
		
	$.extraGlasses.value="default";		
	$.extraMustache.value="default";	
	$.extraExtra.value="default";			

	changePic();
		
});

function addItem(){
	var people = Alloy.Collections.people;
	var detailInfo = Alloy.createModel("people",{
		name:$.nameAdd.value,
		gender:$.genderAdd.value,
		birthday:$.bdayAdd.value,
		address:$.addressAdd.value,
		job:$.nameAdd.value,	
		custom:	$.nameAdd.value,

		hairStyle:$.hairStyle.value,	
		hairColor:$.hairColor.value,
		
		skinColor:$.skinColor.value,	
		faceShape:$.faceShape.value,							
		eyeShape:$.eyeShape.value,		
		
		extraGlassess:$.extraGlasses.value,	
		extraMustache:$.extraMustache.value,
		extraExtra:$.extraExtra.value,		
	});
		
	detailInfo.save();
	people.add(detailInfo);
	closeWindow();
};

$.genderAdd.addEventListener("click",function(e){
	$.nameAdd.blur();
	$.phoneAdd.blur();
	$.addressAdd.blur();
	$.address2Add.blur();
	$.viewGenderPicker.visible=true;
	$.done.visible="true";
});

$.genderPicker.addEventListener('change', function(e) {
	$.genderAdd.value = e.selectedValue[0];
});

$.genderPicker.addEventListener('change', function(e) {
	$.genderAdd.value = e.selectedValue[0];
});

$.genderPicker.addEventListener('change', function(e) {
	$.genderAdd.value = e.selectedValue[0];
});

$.done.addEventListener("click",function(e){
	$.viewGenderPicker.visible=false;	
	$.done.visible=false;	
});


// Image editing follows

$.btn_imageEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible=true;	
	$.btn_faceEditCategory.visible=true;	
	$.btn_hairEditCategory.visible=true;	
	$.btn_extraEditCategory.visible=true;	
	$.btn_doneEdit.visible=true;
	$.btn_imageEdit.visible=false;
});

$.btn_doneEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible=false;	
	$.btn_faceEditCategory.visible=false;	
	$.btn_hairEditCategory.visible=false;	
	$.btn_extraEditCategory.visible=false;	
	closePickers();
	$.btn_imageEdit.visible=true;
	
	changePic();

});

function changePic(){
	$.picName.text=$.skinColor.value+"_"+$.faceShape.value +"_"+$.eyeShape.value;
	$.picHairName.text=$.hairStyle.value+"_"+$.hairColor.value;	
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value +"_"+$.extraExtra.value;		
	
}


function closePickers(){
	$.faceImagePicker.visible=false;
	$.hairImagePicker.visible=false;
	$.extraImagePicker.visible=false;							
}

// Face Choice

$.btn_faceEditCategory.addEventListener("click",function(e){
	closePickers();
	$.faceImagePicker.visible=true;	
});

$.faceImagePicker.addEventListener('change', function(e) {
	$.skinColor.value = e.selectedValue[0];
	$.faceShape.value = e.selectedValue[1];
	$.eyeShape.value = e.selectedValue[2];					
});



// Hair Choice

$.btn_hairEditCategory.addEventListener("click",function(e){
	closePickers();	
	$.hairImagePicker.visible=true;	
});

$.hairImagePicker.addEventListener('change', function(e) {
	$.hairStyle.value = e.selectedValue[0];
	$.hairColor.value = e.selectedValue[1];	
});



// Extra Choice

$.btn_extraEditCategory.addEventListener("click",function(e){
	closePickers();
	$.extraImagePicker.visible=true;	
});

$.extraImagePicker.addEventListener('change', function(e) {
	$.extraGlasses.value = e.selectedValue[0];
	$.extraMustache.value = e.selectedValue[1];
	$.extraExtra.value = e.selectedValue[2];		
});


// done button for each picker : can be deleted 


$.btn_faceEdit.addEventListener("click",function(e){
	closePickers();		
});

$.btn_hairEdit.addEventListener("click",function(e){
	closePickers();
});

$.btn_extraEdit.addEventListener("click",function(e){
	closePickers();	
});


function closeWindow(){
	$.nameAdd.blur();
	$.phoneAdd.blur();
	$.addressAdd.blur();
	$.address2Add.blur();
	$.address3Add.blur();

	Alloy.Globals.tabGroup.setActiveTab(0);
}

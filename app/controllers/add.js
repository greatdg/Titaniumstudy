var args = arguments[0] || {};


$.addWin.addEventListener("focus",function(e){
	$.nameAdd.value="";
	$.genderAdd.value="";	
	$.bdayAdd.value="";


	$.addressAdd.value="";
	$.jobAdd.value="";	
	$.customAdd.value="";

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
	if($.nameAdd.value!=""){
		var people = Alloy.Collections.people;
		var detailInfo = Alloy.createModel("people",{
			name:$.nameAdd.value,
			gender:$.genderAdd.value,
			birthday:$.bdayAdd.value,
			address:$.addressAdd.value,
			job:$.nameAdd.value,	
			custom:	$.customAdd.value,
	
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
});	
	

$.doneCustomAdd.addEventListener("click",function(e){
	if($.customAddCategory.value !==""){
		$.customAdd.value=$.customAdd.value+"!@#"+ $.customAddCategory.value + "$%^" + $.customAddContent.value;
		alert("wow");
		alert($.customAdd.value.substring(3,7));
		$.customAddView.visible="false";	
		$.scrollView.visible="true";	
	}
		else{
			alert("Please input category title");
		}		
});

var field=Alloy.createController("customfield",{
	name:"name",
	field:"fieldvalue",	
}).getView();

$.lowerView.add(field);





// var win = Ti.UI.createWindow();
// var view1 = $.addView;
// var view2 = field;
// var scrollableView = Ti.UI.createScrollableView({
  // views:[view1,view2],
  // showPagingControl:true
// });
// 
// $.addWin.add(scrollableView);
// 














function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


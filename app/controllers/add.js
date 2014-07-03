var args = arguments[0] || {};
var customAddNumber=1 ;

var Imagefactory = require('ti.imagefactory');
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";

var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageFolderName);
if( imageDir.exists() === false){
	imageDir.createDirectory();
}
imageDir = null;


$.addWin.addEventListener('blur', function(e) {
	var lowerView = $.lowerView.getChildren();
	for( var i=0;i<lowerView.length;i++ ) {
		if( i > 4 ) {
			$.lowerView.remove(lowerView[i]);
		}
	}
});

$.addWin.addEventListener("focus",function(e){
	$.nameAdd.value="";
	$.genderAdd.value="";	
	$.bdayAdd.value="";

	$.addressAdd.value="";
	$.jobAdd.value="";	
	$.customAdd.value="";
	$.phoneAdd.value="";
	$.emailAdd.value="";

	$.hairStyle.value="default";	
	$.hairColor.value="default";	
		
	$.skinColor.value="default";		
	$.faceShape.value="default";								
	$.eyeShape.value="default";			
		
	$.extraGlasses.value="default";		
	$.extraMustache.value="default";	

	$.person.image="default_default_default.png";
	changePic();
		
});

var addItemDone = function (e){
	if($.nameAdd.value!=""){
		var people = Alloy.Collections.people;
		var detailInfo = Alloy.createModel("people",{
			name:$.nameAdd.value,
			gender:$.genderAdd.value,
			birthday:$.bdayAdd.value,
			phoneNumber:$.phoneAdd.value,
			address:$.addressAdd.value,
			email:$.emailAdd.value,
			job:$.jobAdd.value,	
			custom:	$.customAdd.value,
			faceShape:$.picName.text,	
			hairStyle:$.hairStyle.value,					
			extra:$.extraGlasses.value,	
			minime:$.extraMustache.value,	
		});
			
		detailInfo.save();
		people.add(detailInfo);
		closeWindow();
	}
	else { alert("Please input name");
	};
	// alert($.picName.text);
};

var cancleAdd = function(e){
	Alloy.Globals.TabGroup.setActiveTab(0);
};


$.genderAdd.addEventListener("click",function(e){
	$.nameAdd.blur();
	$.phoneAdd.blur();
	$.addressAdd.blur();
	$.address2Add.blur();
	$.viewGenderPicker.visible="true";
	$.lowerView.visible="false";	

});

$.genderPicker.addEventListener('change', function(e) {
	$.genderAdd.value = e.selectedValue[0];
});


var doneForGender = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.DONE
});

var flexSpace = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


doneForGender.addEventListener("click",function(e){
	$.lowerView.visible="true";	
	$.viewGenderPicker.visible="false";	
});

$.toolbar.items = [flexSpace, doneForGender];

$.datepicker.type = Ti.UI.PICKER_TYPE_DATE_AND_TIME;




// Image editing follows

$.btn_imageEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="true";	
	$.faceImagePicker.visible="true";
});

$.btn_doneEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";	
	closePickers();
	$.person.image=$.picName.text;
	$.btn_imageEdit.visible="true";

});

function changePic(){
	$.picName.text=$.skinColor.value+"_"+$.faceShape.value +"_"+$.eyeShape.value+".png";
	// alert($.picName.text);
	$.picHairName.text=$.hairStyle.value+"_"+$.hairColor.value;	
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value;		
		
	$.personImageEdit.image=$.picName.text;
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
	$.skinColor.value = e.selectedValue[0].customTitle;
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
	$.container.visible="false";		
	$.customAddView.visible="true";
	$.customAddCategory.value="";
	$.customAddContent.value="";		
});	
	

$.doneCustomAdd.addEventListener("click",function(e){
	if($.customAddCategory.value !==""){
		$.customAdd.value=$.customAdd.value+ $.customAddCategory.value + "&&" + $.customAddContent.value + "##" ;

		$.customAddCategory.blur();
		$.customAddContent.blur();
			// alert($.customAdd.value);

		var title = $.customAddCategory.value,
			content = $.customAddContent.value;
		
		
		var field=Alloy.createController("customfield",{
			name:title,
			field:content,	
		}).getView();	
			
			$.lowerView.add(field);

		$.customAddView.visible="false";	
		$.container.visible="true";	


	}
		else{
			// alert("Please input category title");
			$.customAddView.visible="false";	
			$.container.visible="true";	
			$.customAddCategory.blur();
			$.customAddContent.blur();
			
		}		
});




function doCrop(e) {
	Titanium.Media.takeScreenshot(function(e){
		var image = e.media;
		var newBlob = Imagefactory.imageAsCropped(image, { width:100, height:100, x:10, y:50 });
		newBlob = Imagefactory.imageWithRoundedCorner(newBlob, { borderSize:4, cornerRadius:40});
		var name = 	$.nameAdd.value + $.bdayAdd.value;
		var imageFile = Ti.Filesystem.getFile(imageRootPath, name + ".jpg");
		imageFile.createFile();		
		if ( imageFile.write(newBlob) === false){
			alert("oversize");
		} ;		
		$.newImage.image = imageRootPath + name + ".jpg";
	});
}





























function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


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


var iosKeyboardNavigation = function(controllers, buttonText) {
    if (OS_IOS) { // this constant is only for Alloy
        for (var i = 0; i < controllers.length; i++) {
            var current = controllers[i], nextIndex = i + 1, prevIndex = i > 0 ? i : 0;
 			

 			var flexSpace = Ti.UI.createButton({
			    systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});

            var prev_btn = Titanium.UI.createButton({
                title : buttonText[prevIndex-1] || 'Next',
                style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
                controller : current,
                prevController : i != 0 ? controllers[i-1] : controllers[i]
            });

            prev_btn.addEventListener('click', function(e) {
                if (this.prevController) {
                    this.prevController.focus();
                } else {
                    this.controller.blur();
                }
            });



            var next_btn = Titanium.UI.createButton({
                title : buttonText[i+1] || 'Next',
                style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
                controller : current,
                nextController : controllers.length > nextIndex ? controllers[nextIndex] : null
            });

            next_btn.addEventListener('click', function(e) {
                if (this.nextController) {
                    this.nextController.focus();
                } else {
                    this.controller.blur();
                }
            });
 			if( i == 0 ) {
 				current.keyboardToolbar = [flexSpace, next_btn];	
 			} else {
 				current.keyboardToolbar = [prev_btn, flexSpace, next_btn];
 			}
            
        };
    };
};
iosKeyboardNavigation(
	[$.nameAdd, $.bdayAdd, $.phoneAdd, $.emailAdd, $.jobAdd, $.addressAdd, $.address2Add, $.address3Add], 
	["Name", "Birthday", "Phone", "Email", "Job", "Street", "Suburb", "City"]
);

function clearAddField() {
	var addViewField = $.addViewField.getChildren();
	for( var i=0;i<addViewField.length;i++ ) {
		$.addViewField.remove(addViewField[i]);
	}
}
$.addWin.addEventListener('blur', function(e) {
	clearAddField();
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
	$.scrollView.setScrollsToTop(true);
	
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
			var obj = detailInfo.toJSON();
			Ti.API.info(obj.no);
	
			doCrop(obj.no);
			clearAddField();
			closeWindow();
		}
		else { alert("Please input name");
		};
		
	
	// alert($.picName.text);
};

var cancleAdd = function(e){
	clearAddField();
	Alloy.Globals.TabGroup.setActiveTab(0);
};
// $.genderAdd.addEventListener('focus', function(e) {
// 	$.nameAdd.blur();
// 	$.phoneAdd.blur();
// 	$.genderAdd.blur();
// 	$.addressAdd.blur();
// 	$.address2Add.blur();
// 	$.viewGenderPicker.visible="true";
// 	$.lowerView.visible="false";	
// });

$.genderAdd.addEventListener("click",function(e){
	$.genderAdd.blur();
	$.nameAdd.blur();
	$.phoneAdd.blur();	
	$.addressAdd.blur();
	$.address2Add.blur();
	$.viewGenderPicker.visible="true";

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
	$.btn_addMore.visible="true";

});

function changePic(type, e){
	if( e ) {
		if( type == "face" ) {

			var face = "null", hair = "null", mustache = "null";

			if( e.selectedValue[0].length > 0 ) {
				face  = e.selectedValue[0];
			}

			if( e.selectedValue[1].length > 0 ) {
				hair  = e.selectedValue[1];
			}

			if( e.selectedValue[2].length > 0 ) {
				mustache  = e.selectedValue[2];
			}


			$.picName.text=face+"_"+hair +"_"+mustache+".png";
			$.personImageEdit.image=$.picName.text;	

		} else if( type == "hair" ) {
			var shape = "null", color = "null";
			if( e.selectedValue[0].length > 0 ) {
				shape  = e.selectedValue[0];
			}

			if( e.selectedValue[1].length > 0 ) {
				color  = e.selectedValue[1];
			}
			$.picHairName.text=shape+"_"+color+".png";	
			$.hairImageEdit.image = $.picHairName.text;
		}
		
			
	}
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
	changePic("face", e);			
});



// Hair Choice

$.btn_hairEditCategory.addEventListener("click",function(e){
	closePickers();	
	$.hairImagePicker.visible="true";	
});

$.hairImagePicker.addEventListener('change', function(e) {
	// $.hairStyle.value = e.selectedValue[0];
	// $.hairColor.value = e.selectedValue[1];	
	changePic("hair", e);
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
	// $.container.visible="false";		
	$.customAddView.visible="true";
	$.customAddCategory.value="";
	$.customAddContent.value="";		
});	
	

$.doneCustomAdd.addEventListener("click",function(e){
	$.customAddView.visible="false";
	
	if($.customAddCategory.value !==""){
		$.customAdd.value=$.customAdd.value+ $.customAddCategory.value + "&&" + $.customAddContent.value + "##" ;

		$.customAddCategory.blur();
		$.customAddContent.blur();
			// alert($.customAdd.value);



		var title = $.customAddCategory.value,
			content = $.customAddContent.value;
		
		var field=Alloy.createController("customField",{
			name:title,
			field:content,	
		}).getView();	
		$.addViewField.add(field);
		// alert("custom here");
			
		// $.container.visible="true";

		// $.container.height = parseInt($.container.height) +40;


	}
		else{
			// alert("Please input category title");
			// $.container.visible="true";	
			$.customAddCategory.blur();
			$.customAddContent.blur();
			
		}		
});




function doCrop(name) {
	$.btn_imageEdit.visible = false;
	Titanium.Media.takeScreenshot(function(e){
		var image = e.media;
		var newBlob = Imagefactory.imageAsCropped(image, { width:250, height:290, x:380, y:140 });
		newBlob = Imagefactory.imageWithRoundedCorner(newBlob, { borderSize:4, cornerRadius:100});
		var imageFile = Ti.Filesystem.getFile(imageRootPath, name + ".jpg");
		imageFile.createFile();
		$.btn_imageEdit.visible = true;
				
		if ( imageFile.write(newBlob) === false){
			alert("oversize");
		} ;		
	});
}




function closeWindow(){
	Alloy.Globals.TabGroup.setActiveTab(0);
}


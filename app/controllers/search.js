var args = arguments[0] || {};
var people = Alloy.Collections.people;
// var table = people.config.adapter.collection_name;
// var resultListWin=Alloy.CreateController();
searchCondition ="name";

$.btn_Appearance.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="true";	
	$.faceImagePicker.visible="true";
	$.byTextView.visible="true";
	$.rightDot.visible="false";
	$.appearance_deselect.visible="false";	
});

$.btn_byText.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";
	closePickers();	
	$.byTextView.visible="true";
	$.searchTextInput.value="";
	$.rightDot.visible="true";
	$.appearance_deselect.zIndex="100";
	$.appearance_deselect.visible="true";
		
});




$.btn_byTextSearch.addEventListener("click",function(e){
	$.searchTextInput.blur();	
	// search Actions!!!!
	searchInput = $.searchTextInput.value;

	// people.fetch({query: "SELECT * FROM " + table + " where name like '%"+$.searchTextInput.value+"%'"});

	// Ti.API.debug('-----');
	// Ti.API.debug(people);


	var result = Alloy.createController('searchResult').getView();

	Alloy.Globals.activeTab.open(result);

});


$.btn_doneEdit.addEventListener("click",function(e){
	
	searchInput = $.searchTextInput.value; 
	// name of pic

	var result = Alloy.createController('searchResult').getView();

	Alloy.Globals.activeTab.open(result);
	
	closePickers();
});



$.searchCondition.addEventListener("click",function(e){
	$.searchTextInput.blur();
	$.searchConditionPicker.visible="true";
});

$.searchConditionPicker.addEventListener('change', function(e) {
	$.searchCondition.value = e.selectedValue[0];
	searchCondition = $.searchCondition.value;
});


var doneForCategory = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.DONE
});

var flexSpace = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

$.toolbar.items = [flexSpace, doneForCategory];

$.searchTextInput.addEventListener("focus",function(e){
	$.searchConditionPicker.visible="false";	
});




function changePic(){
	$.picName.text=$.skinColor.value+"_"+$.faceShape.value +"_"+$.eyeShape.value+".png";
	alert($.skinColor.value);
	alert($.picName.text);
	$.picHairName.text=$.hairStyle.value+"_"+$.hairColor.value;	
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value;		
	$.personImageEdit.image=$.picName.text;	
};




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



function closePickers(){
	$.faceImagePicker.visible="false";
	$.hairImagePicker.visible="false";
	$.extraImagePicker.visible="false";							
}

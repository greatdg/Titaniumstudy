var args = arguments[0] || {};
var people = Alloy.Collections.people;
// var table = people.config.adapter.collection_name;
// var resultListWin=Alloy.CreateController();
searchCondition ="name";

$.btn_Appearance.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="true";	
	$.faceImagePicker.visible="true";
	$.byTextView.visible="false";
});

$.btn_byText.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";
	closePickers();	
	$.byTextView.visible="true";
	$.searchTextInput.value="";
});




$.btn_byTextSearch.addEventListener("click",function(e){

	$.searchTextInput.blur();	
	// search Actions!!!!
	searchInput = $.searchTextInput.value;

	// people.fetch({query: "SELECT * FROM " + table + " where name like '%"+$.searchTextInput.value+"%'"});

	// Ti.API.debug('-----');
	// Ti.API.debug(people);

	$.byTextView.visible="false";

	var result = Alloy.createController('searchResult').getView();

	Alloy.Globals.activeTab.open(result);

});




$.searchCondition.addEventListener("click",function(e){
	$.searchTextInput.blur();
	$.searchConditionPicker.visible="true";
	// $.lowerView.visible="false";	
	// $.done.visible="true";
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
	$.picName.text=$.skinColor.value+"_"+$.faceShape.value +"_"+$.eyeShape.value;
	$.picHairName.text=$.hairStyle.value+"_"+$.hairColor.value;	
	$.picExtraName.text=$.extraGlasses.value+"_"+$.extraMustache.value +"_"+$.extraExtra.value;			
};


$.btn_doneEdit.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";	
	closePickers();
});

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



function closePickers(){
	$.faceImagePicker.visible="false";
	$.hairImagePicker.visible="false";
	$.extraImagePicker.visible="false";							
}

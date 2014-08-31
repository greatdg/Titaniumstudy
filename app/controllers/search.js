var args = arguments[0] || {};
var people = Alloy.Collections.people;
// var table = people.config.adapter.collection_name;
// var resultListWin=Alloy.CreateController();
searchCondition ="name";

$.btn_Appearance.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="true";	
	$.faceImagePicker.visible="true";
	$.byTextView.visible="false";
	$.text_deselect.visible="false";
	$.appearance_deselect.visible="true";	
});

$.btn_byText.addEventListener("click",function(e){
	$.viewImageEditCategory.visible="false";
	closePickers();	
	$.byTextView.visible="true";
	$.searchTextInput.value="";
	$.text_deselect.visible="true";
	// $.appearance_deselect.zIndex="100";
	$.appearance_deselect.visible="false";
		
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





// image search !!!
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



function closePickers(){
	$.faceImagePicker.visible="false";
	$.hairImagePicker.visible="false";
	$.extraImagePicker.visible="false";							
}

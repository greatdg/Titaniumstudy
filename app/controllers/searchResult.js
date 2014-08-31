var args = arguments[0] || {};
var people = Alloy.Collections.people;
var table = people.config.adapter.collection_name;

var searchType = args.searchType || "";
var searchCategory = args.category || "";
var searchInput = args.name || "";
var face = args.face || "";
var hair = args.hair || "";

if( searchType == "Image" ) {
	var splitFace = face.split("_"),
		splitHair = hair.split("_");
		
	var isFaceNull = face.indexOf("null");
	var isHairNull = hair.indexOf("null");
}

Ti.API.debug(face);

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;
	var splitDataFace = item.faceShape.split("_");
	var splitDataHair = item.hairStyle.split("_");
	var searchText = "", compareText = "";
	if( isFaceNull >= 0 ) {	
		if( splitFace[0] == "null" ) {
			searchText += "_";
			compareText += "_";
		} else {
			searchText += splitFace[0];
			compareText += splitDataFace[0];
		}
		
		if( splitFace[1] == "null" ) {
			searchText += "_";
			compareText += "_";
		} else {
			searchText += splitFace[1];
			compareText += splitDataFace[1];			
		}

		if( splitFace[2] == "null" ) {
			searchText += "_";
			compareText += "_";
		} else {
			searchText += splitFace[2];
			compareText += splitDataFace[2];			
		}
		Ti.API.debug(searchText);
		Ti.API.debug(compareText);	
		if(searchText == compareText ) {
			item.title = "Matched";
			return item;
		}
	} else {
		if( face == item.faceShape ) {
			return item;
		}
		
		if( hair == item.hairStyle ) {
			return item;
		}
	}
	
	searchText = "";
	compareText = "";
	
	return item;

};


$.searchResultWin.addEventListener('focus', function(e){

	if( searchType == "Text" ) {
		if( searchCategory.length > 0 && searchInput.length > 0 ) {
			
			people.fetch({query: "SELECT * FROM " + table + " where "+searchCategory+" like '%"+searchInput+"%'"});
		}	
	} else if( searchType == "Image" ) {
			people.fetch();
	}
	
	// alert(searchCondition);

});



$.listTable.addEventListener('click',function(e){
	var win = Alloy.createController('detail',{
		alloyId: e.row.alloy_id
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
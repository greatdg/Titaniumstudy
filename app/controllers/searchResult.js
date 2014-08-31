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

function dofilter(collection) {
	return collection.filter(function(item) {
		var item = item.toJSON();
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

			if(searchText == compareText ) {
				return true;
			}
		} else {
			if( face == item.faceShape ) {
				return true;
			}
			
			if( hair == item.hairStyle ) {
				return true;
			}
		}
		
		return false;
	});
}

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;		
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
		alloyId: e.row.no
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
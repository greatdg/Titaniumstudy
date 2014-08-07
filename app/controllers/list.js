var args = arguments[0] || {};
var people = Alloy.Collections.people;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";
people.fetch();

//alert(people.length);
//$.defaultImage.hide();

function transformfunction(item) {
	var item = item.toJSON();
	
	item.title = item.name;
	item.PicName = imageRootPath+item.no +".jpg";
	return item;
	//$.smallFace.image = people.
	//$.listList.text = item.name;
	// $.smallFace.image = item.no + '.jpg';
	
};

$.listWin.addEventListener('focus', function(e){
	people.fetch();
});

// var data = [];
// 
// var row = Alloy.createController('listTableViewRow').getView();
    	// data.push(row);
// $.listTable.data = data;


	
$.listTable.addEventListener('click',function(e){
	//Ti.API.debug(e)
	var win = Alloy.createController('detail',{
		alloyId: e.row.no
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
$.listTable.addEventListener('delete', function(e){
	//alert(e.row.alloy_id);
	Ti.API.debug(e.row);
	var model=people.get(e.row.no);
	model.destroy();
});

$.listTable.setSearch($.listSearch);

// $.listSearch.addEventListener('change', function(e) {
	// //alert('est');
	// searchTable(this.value);
// 		
// });
// 
// Titanium.App.addEventListener('searchBlur', function(e){
	// $.listSearch.blur();
// 	
// });
// 
// 
// 
// var searchTable = function(text){
// 	
	// var searchResult = [];
	// if(text.length>0){
	// _.map(people.name, function(e, key){
		// //Ti.API.debug(key);
		// _.map(e, function(d){
			// var a=d.title.indexOf(text);
			// //Ti.API.debug(a);
			// d.category=key;
			// if(a>=0){
			// searchResult.push(d);
// 			
			// }
		// });
	// });
	// };
	// $.listTable.setData(searchResult);
// };
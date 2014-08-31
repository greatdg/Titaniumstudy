var args = arguments[0] || {};
var people = Alloy.Collections.people;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";

$.listTable.setSearch($.listSearch);

people.fetch();


function transformfunction(item) {
	var item = item.toJSON();
	
	item.title = item.name;
	item.PicName = imageRootPath+item.no +".jpg";
	return item;
	
};

$.listWin.addEventListener('focus', function(e){
	people.fetch();
});




	
$.listTable.addEventListener('click',function(e){
	
	var win = Alloy.createController('detail',{
		alloyId: e.row.no
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
$.listTable.addEventListener('delete', function(e){

	Ti.API.debug(e.row);
	var model=people.get(e.row.no);
	model.destroy();
});


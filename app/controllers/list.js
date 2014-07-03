var args = arguments[0] || {};
var people = Alloy.Collections.people;
var imageFolderName = "person_image";
var imageRootPath = Ti.Filesystem.applicationDataDirectory + "/" + imageFolderName + "/";
people.fetch();

//alert(people.length);

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;
	item.PicName = imageRootPath+item.no +".jpg";
	return item;
	//$.smallFace.image = people.
	//$.listList.text = item.name;
	$.smallFace.image = item.no + '.jpg';
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
	var win = Alloy.createController('detail',{
		alloyId: e.row.alloy_id
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
$.listTable.addEventListener('delete', function(e){
	//alert(e.row.alloy_id);
	
	var model=people.get(e.row.alloy_id);
	model.destroy();
});

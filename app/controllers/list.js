var args = arguments[0] || {};
var people = Alloy.Collections.people;

people.fetch();

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;
	return item;
}


// var listTableData = [{title: 'James'}, {title: 'Amy'}];

// $.listTable.setData(listTableData);	
	
$.listTable.addEventListener('click',function(e){
	var win = Alloy.createController('detail',{
		alloyId: e.row.alloy_id
	}).getView();
	//alert(e.index)
	
	//Ti.API.debug(name);
	Alloy.Globals.activeTab.openWindow(win);

 });
 
$.listTable.addEventListener('delete', function(e){
	//alert(e.row.alloy_id);
	
	var model=people.get(e.row.alloy_id);
	model.destroy();
})

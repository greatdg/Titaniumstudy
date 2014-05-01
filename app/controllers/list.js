var args = arguments[0] || {};
var people = Alloy.Collections.people;

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;
	return item;
}


// var listTableData = [{title: 'James'}, {title: 'Amy'}];

// $.listTable.setData(listTableData);	
	
$.listTable.addEventListener('click',function(e){
	var win = Alloy.createController('detail').getView();
	alert('detail'+e.index)
	index.openWindow(win);
 });
var args = arguments[0] || {};



var listTableData = [{title: 'James'}, {title: 'Amy'}];

$.listTable.setData(listTableData);	
	
$.listTable.addEventListener('click',function(e){
	var win = Alloy.createController('detail').getView();
	Alloy.Globals.openNav.openWindow(win);
 });
 


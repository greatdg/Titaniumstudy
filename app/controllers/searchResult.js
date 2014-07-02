var args = arguments[0] || {};
var people = Alloy.Collections.people;
var table = people.config.adapter.collection_name;
// var conditionField = "name";

function transformfunction(item) {
	var item = item.toJSON();
	item.title = item.name;
	return item;

};


$.searchResultWin.addEventListener('focus', function(e){
	people.fetch({query: "SELECT * FROM " + table + " where "+searchCondition+" like '%"+searchInput+"%'"});
	alert(searchCondition);
	alert(searchCondition);
});



$.listTable.addEventListener('click',function(e){
	var win = Alloy.createController('detail',{
		alloyId: e.row.alloy_id
	}).getView();

	Alloy.Globals.activeTab.openWindow(win);

 });
 
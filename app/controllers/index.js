Alloy.Globals.TabGroup = $.index;

$.index.addEventListener("focus", function(e){
	Alloy.Globals.activeTab = this.getActiveTab();
});

Alloy.Globals.TabGroup.setActiveTab(0);
$.index.open();


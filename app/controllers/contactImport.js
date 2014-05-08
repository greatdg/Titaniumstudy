var args = arguments[0] || {};

var importTableData = [{title: 'John'}, {title: 'Mary'}];

// $.importTable.setData(importTableData);

var performAddressBookFunction = function(){
	var contacts = Ti.Contacts.getAllPeople();
    var data = [];
    for (var i = 0; i < contacts.length; i++) {
        var title = contacts[i].fullName;
        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Alloy.createController('importTableView',{
        	title: title
        }).getView();
    	data.push(row);
    }
    $.importTable.data = data;
};
var addressBookDisallowed = function(){
	alert('test12222asdfdaf')
};
if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
    performAddressBookFunction();
} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
    Ti.Contacts.requestAuthorization(function(e){
        if (e.success) {
            performAddressBookFunction();
        } else {
            addressBookDisallowed();
        }
    });
} else {
    addressBookDisallowed();
}

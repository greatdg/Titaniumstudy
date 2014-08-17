var args = arguments[0] || {};



// $.importTable.setData(importTableData);


var data = [];

var singleValue = [
  'recordId', 'firstName', 'middleName', 'lastName', 'fullName', 'prefix', 'suffix',
  'nickname', 'firstPhonetic', 'middlePhonetic', 'lastPhonetic', 'organization',
  'jobTitle', 'department', 'note', 'birthday', 'created', 'modified', 'kind'
];
var multiValue = [
  'email', 'address', 'phone', 'instantMessage', 'relatedNames', 'date', 'url'
];

var performAddressBookFunction = function() {	
	var contacts = Ti.Contacts.getAllPeople();
	// Ti.API.debug("start")
	// Ti.API.debug(contacts.length)
    for (var i = 0; i < contacts.length; i++) {
        var contactData = contacts[i];
    //     for (var j=0, jlen=singleValue.length; j<jlen; j++){
		  //   Ti.API.info(singleValue[j] + ': ' + contactData[singleValue[j]]);
		  // }
		  // for (var j=0, jlen=multiValue.length; j<jlen; j++){
		  //   Ti.API.info(multiValue[j] + ': ' + JSON.stringify(contactData[multiValue[j]]));
		  // }


        var title = contacts[i].fullName;   
        

        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Alloy.createController('importTableView',{
        	contactData : contactData
        	
        	
        }).getView();
    	data.push(row);
    }
    $.importTable.data = data;
};
var addressBookDisallowed = function(){
	alert('testaaaaa1222daf');
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



var buttonImportCancel = Ti.UI.createButton({
	title: 'Cancel',
	color: 'red',
});

$.contactImport.leftNavButton = null;


var clickImportDone = function(e){
		
		var importData = $.importTable.getData();
		for(var i=0;i<importData.length;i++) {
			var section = importData[i];
			for(var j=0;j<section.rowCount;j++) {
				var row = section.rows[j];
							
				if(row.children[0].checkBtn === true){
					
					var people = Alloy.Collections.people;

					
					var personalInfo = row.children[1];
					
					var birthday = "",
						email = "",
						text = "";
						phoneNumber = "";
						organization = "";
						address1 = "";
						address2 = "";
						address3 = "";
					_.map(personalInfo, function(value, key) {
						if( key == "allData" ) {
							
							if( personalInfo[key].birthday ) {
								var splitBirthday = personalInfo.allData.birthday.split('T');
								birthday = splitBirthday[0];	
							};
							
							_.map(personalInfo[key].phone, function(value){
								if (phoneNumber == "" && value && value.length > 0){
									phoneNumber = value[0];
								};
							});
							
							if( personalInfo[key].organization ){
								organization = personalInfo.allData.organization;
							};
							
							
						
							_.map(personalInfo[key].address, function(value, key){
								_.map(value[0], function(val, subkey) {

									if( address1 == "" && subkey == "Street" ) {
										address1 = val;
									} else if( address2 == "" && subkey == "State" ) {
										address2 = val;
									} else if( address3 == "" && subkey == "City" ) {
										address3 = val;
									};
									
								});
										
							});
							
							
						} else if( key == "email" ) {
							_.map(personalInfo[key], function(value) {
								if( email == "" && value && value.length > 0 ) {
									email = value[0];
								}
							});
						} else if( key == "text" ) {
							text = value;
						} 
						
					});
					
					// {'email': {
						// 'home': ['afdsasdfa']
					// }}
					
					var detailInfo = Alloy.createModel("people",{
					name: text,
					email: email,
					birthday: birthday,
					phoneNumber: phoneNumber,
					job: organization,
					address1: address1,
					address2: address2,
					address3: address3
					
					
					 
					// gender:$.genderAdd.value,
					// birthday:$.bdayAdd.value,
					// address:$.addressAdd.value,
					// job:$.nameAdd.value,	
					// custom:	$.nameAdd.value,
					
					// hairStyle:$.hairStyle.value,	
					// hairColor:$.hairColor.value,
// 					
					// skinColor:$.skinColor.value,	
					// faceShape:$.faceShape.value,							
					// eyeShape:$.eyeShape.value,		
// 					
					// extraGlassess:$.extraGlasses.value,	
					// extraMustache:$.extraMustache.value,
					// extraExtra:$.extraExtra.value,
							
					});
					
					

// 			 		
				  detailInfo.save();
				  people.add(detailInfo);
				 					
					}

				}

				
			}
				
		
	for(var i=0;i<importData.length;i++) {
		var section = importData[i];
		
		for(var j=0;j<section.rowCount;j++) {	
			var row = section.rows[j];
			//Ti.API.debug(row.children[0]);
			row.children[0].color='gray';
			row.children[0].checkBtn='false';
			
		};
	};
	
	$.contactImport.leftNavButton = null;
};





buttonImportCancel.addEventListener('click', function(e){
		var importData = $.importTable.getData();
	for(var i=0;i<importData.length;i++) {
		var section = importData[i];
		
		for(var j=0;j<section.rowCount;j++) {	
			var row = section.rows[j];
			//Ti.API.debug(row.children[0]);
			row.children[0].color='gray';
			row.children[0].checkBtn='false';
			
		};
	};
	$.contactImport.leftNavButton = null;
});
		// <LeftNavButton>
			// <Button title="Cancel" id="buttonImportCancel" onClick="clickImportCancel">
		// </LeftNavButton>
// 		
// 		


$.importTable.addEventListener('click',function(e){
	var importData = $.importTable.getData();
	var isChecked = false;
	
for(var i=0;i<importData.length;i++) {
	var section = importData[i];
					
	for(var j=0;j<section.rowCount;j++) {	
		var row = section.rows[j];		
		if(row.children[0].checkBtn===true){			
			 isChecked = true;
			 break;
		};
	};
	if( isChecked == true ) {
		$.contactImport.leftNavButton=buttonImportCancel;	
	} else {
		$.contactImport.leftNavButton=null;
	}
	
};
});






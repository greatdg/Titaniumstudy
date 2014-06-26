exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "gender": "integer",
		    "birthday": "text",
		    "phoneNumber": "text",
		    "address1": "text",
		    "address2": "text",
		    "address3": "text",
		    "email": "text",
		    "job": "text",
		    "custom": "text",		    
		    "hairStyle":"text",
		    "hairColor":"text",		    
		    "skinColor": "text",	
		    "faceShape":"text",	    
		    "eyeShape":"text",
 		    "extraGlasses": "text",
 		    "extraMustache":"text",
 		    "extraExtra": "text",		       		    
		},
		adapter: {
			type: "sql",
			collection_name: "people"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
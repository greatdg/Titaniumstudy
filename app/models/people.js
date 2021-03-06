exports.definition = {
	config: {
		columns: {
			"no": "INTEGER PRIMARY KEY AUTOINCREMENT",
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
		    "faceShape":"text",	  
		    "hairStyle":"text",	    
 		    "extra": "text",
 		    "minime": "text",		       		    
		},
		adapter: {
			type: "sql",
			collection_name: "people",
			idAttribute : "no",
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
Events = new Meteor.Collection("Events");
Topics = new Meteor.Collection("Topics");

/***************************
 * EVENTS
 ***************************/
EventSchema = new SimpleSchema({
	title: {
		type: String
	},
	description: {
		type: String,
		autoform: {
	      afFieldInput: {
	        type: "textarea"
	      }
	    }
	},
	speaker: {
		type: String
	},
	date: {
		type: Date,
		autoform: {
	      afFieldInput: {
	        type: "datetime-local"
	      }
	    }
	},
	time: {
		type: String
	},
	where: {
		type: String
	},
	topic: {
		type: String,
		//allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
	    autoform: {
			options: function () {
			    var options = [];
			    Topics.find().forEach(function (element) {
			        options.push({
			            label: element.title, value: element._id
			        })
			    });
			    return options;
			},
			afFieldInput: {
				firstOption: "Select a topic"
			}
	    }
	},
	talkLength: {
		type: Number,
	    optional: true,
	    autoform: {
	      afFieldInput: {
	        type: "range",
	        min: 0,
	        max: 100
	      }
	    }
	},
	attachments: {
		type: String,
		autoform: {
	      afFieldInput: {
	        type: "file"
	      }
	    },
	    optional: true
	},
	isActive: {
		type: Boolean,
		defaultValue: false,
		optional: true
	}
});

Events.attachSchema( EventSchema );


/***************************
 * TOPICS
 ***************************/
TopicSchema = new SimpleSchema({
	title: {
		type: String
	},
	description: {
		type: String,
		optional: true
	},
	isActive: {
		type: Boolean,
		defaultValue: true,
		optional: true
	}
});

Topics.attachSchema( TopicSchema );

//Topics = new Meteor.Collection("Topics");
Meteor.startup(function () {
     
    console.log(Events.find().count());
    console.log(Topics.find().count());
    if (Topics.find().count() == 0) {
    	Topics.insert({title:"Meetups with friends", description: "", isActive: true});
		Topics.insert({title:"Arts & Culture", description: "", isActive: true});
		Topics.insert({title:"Book Clubs", description: "", isActive: true});
		Topics.insert({title:"Career & Business", description: "", isActive: true});
		Topics.insert({title:"Cars & Motorcycles", description: "", isActive: true});
		Topics.insert({title:"Community & Environment", description: "", isActive: true});
		Topics.insert({title:"Dancing", description: "", isActive: true});
		Topics.insert({title:"Education & Learning", description: "", isActive: true});
		Topics.insert({title:"Fashion & Beauty", description: "", isActive: true});
		Topics.insert({title:"Fitness", description: "", isActive: true});
		Topics.insert({title:"Food & Drink", description: "", isActive: true});
		Topics.insert({title:"Games", description: "", isActive: true});
		Topics.insert({title:"Health & Wellbeing", description: "", isActive: true});
		Topics.insert({title:"Hobbies & Crafts", description: "", isActive: true});
		Topics.insert({title:"Language & Ethnic Identity", description: "", isActive: true});
		Topics.insert({title:"LGBT", description: "", isActive: true});
		Topics.insert({title:"Lifestyle", description: "", isActive: true});
		Topics.insert({title:"Movements & Politics", description: "", isActive: true});
		Topics.insert({title:"Movies & Film", description: "", isActive: true});
		Topics.insert({title:"Music", description: "", isActive: true});
		Topics.insert({title:"New Age & Spirituality", description: "", isActive: true});
		Topics.insert({title:"Outdoors & Adventure", description: "", isActive: true});
		Topics.insert({title:"Paranormal", description: "", isActive: true});
		Topics.insert({title:"Parents & Family", description: "", isActive: true});
		Topics.insert({title:"Pets & Animals", description: "", isActive: true});
		Topics.insert({title:"Photography", description: "", isActive: true});
		Topics.insert({title:"Religion & Beliefs", description: "", isActive: true});
		Topics.insert({title:"Sci-Fi & Fantasy", description: "", isActive: true});
		Topics.insert({title:"Singles", description: "", isActive: true});
		Topics.insert({title:"Socializing", description: "", isActive: true});
		Topics.insert({title:"Sports & Recreation", description: "", isActive: true});
		Topics.insert({title:"Support", description: "", isActive: true});
		Topics.insert({title:"Tech", description: "", isActive: true});
		Topics.insert({title:"Writing", description: "", isActive: true});
    }

    /*Meteor.publish('Published_Events', function() {
    	var evnts = Events.find({isActive: true});
    	evnts.forEach(function (row) {
            row.topic = Topics.findOne({_id: row.topic});
        }); 
		return evnts;
    });*/
});

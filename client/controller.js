Template.base.events({
	'click .btn-lang': function (){
		if (TAPi18n.getLanguage() == 'tr')
			TAPi18n.setLanguage('en');
		else
			TAPi18n.setLanguage('tr');

		console.log('language has been changed');
	},


	'click .btnDelete': function() {
		if (confirm('Are you sure want to delete ?') == true) {
	      Events.remove(this._id);
	    }
	}
});

var welcomeuser;
Template.base.helpers({
	welcomeuser: function() {
		var user = Meteor.user();
	  	if (user && user.emails) {
	    	welcomeuser = user.emails[0].address;
	    	return user.emails[0].address;
	  	}
	}	
});

Template.eventList.helpers({
    events: function() {
    	return Events.find({isActive: true});
    },

    getTopicById: function(id) {
    	return Topics.findOne({_id: id}).title;
    },

});


Template.event.helpers({
  autoSaveMode: function () {
    return Session.get("autoSaveMode") ? true : false;
  },
  selectedPersonDoc: function () {
    return Events.findOne(Session.get("selectedPersonId"));
  },
  isSelectedPerson: function () {
    return Session.equals("selectedPersonId", this._id);
  },
  formType: function () {
    if (Session.get("selectedPersonId")) {
      return "update";
    } else {
      return "insert";
    }
  },
  disableButtons: function () {
    return !Session.get("selectedPersonId");
  }
});

Template.event.events({
	'submit form': function() {
		Session.set("selectedPersonId", null);
	},
	'click .btnEdit': function () {
		Session.set("selectedPersonId", this._id);
	},
	'change .autosave-toggle': function () {
		Session.set("autoSaveMode", !Session.get("autoSaveMode"));
	}
});


/*
Template.event.helpers({

    selectedDoc: function() {
	    return Events.findOne({_id: Session.set('selectedDocId')});
    }


});
*/
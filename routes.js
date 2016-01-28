
FlowRouter.route('/event', {
	name: 'event',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('base', { partial:'event' });
	}
});

FlowRouter.route('/event/:postId', {
	name: 'event_update',
    action: function(params, queryParams) {
        Session.set("selectedDocId", params.postId);
        BlazeLayout.render('base', { partial:'event', parameters:params });
    }
});
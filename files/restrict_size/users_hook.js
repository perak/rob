Users.before.update(function(userId, doc, fieldNames, modifier, options) {
	if(modifier && modifier.$set) {
		var set = modifier.$set;

		// Example: profile Web site URL limited to max 10 chars
		if(set["profile.website"] && set["profile.website"].length > 10) {
			throw new Meteor.Error("", "URL too long!");
		}
	}
});

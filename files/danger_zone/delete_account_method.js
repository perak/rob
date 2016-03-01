Meteor.methods({
	"deleteUserAccount": function() {
		if(!this.userId) {
			throw new Meteor.Error(404, "Access denied.");
		}

		Users.remove({ _id: this.userId });
	}
});

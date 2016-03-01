
Template.TEMPLATE_NAME.events({
	"click .delete-account": function(e, t) {
		e.preventDefault();
		var me = this;
		bootbox.dialog({
			message: "Are you sure you want to delete your account?",
			title: "Delete your account",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-danger",
					callback: function() {
						Meteor.call("deleteUserAccount");
					}
				},
				danger: {
					label: "No",
					className: "btn-default"
				}
			}
		});
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({

});

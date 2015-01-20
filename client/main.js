Template.main.helpers({
  environment: function() {
    return Meteor.isCordova ? "mobile" : "web");
  }
});
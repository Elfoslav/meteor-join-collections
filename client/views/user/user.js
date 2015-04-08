Template.user.helpers({
  user: function() {
    return Users.findOne();
  },
  events: function() {
    return Events.find();
  }
});
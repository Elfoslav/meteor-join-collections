Template.event.helpers({
  event: function() {
    return Events.findOne();
  },
  getUserName: function(userId) {
    return Users.findOne(userId).name;
  }
});
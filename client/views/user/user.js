Template.user.helpers({
  user: function() {
    return Users.findOne();
  }
});
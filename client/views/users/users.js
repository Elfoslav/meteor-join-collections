Template.users.helpers({
  users: function() {
    return Users.find({}, {
      sort: { name: 1 }
    });
  },
  userEvents: function(userId) {
    return Events.find({
      users: {
        $in: [ userId ]
      }
    });
  }
});

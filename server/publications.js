Meteor.publish('events', function(eventId) {
  if (eventId) {
    return Events.find({ _id: eventId });
  }
  return Events.find();
});

Meteor.publish('eventUsers', function(eventId) {
  var event = Events.findOne({ _id: eventId });
  return Users.find({
    _id: {
      $in: event.users
    }
  });
});

Meteor.publish('users', function(userId) {
  if (userId) {
    return Users.find({ _id: userId });
  }
  return Users.find();
});

Meteor.publish('userEvents', function(userId) {
  return Events.find({
    users: {
      $in: [ userId ]
    }
  });
});
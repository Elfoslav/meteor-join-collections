Events = new Mongo.Collection('events', {
  transform: function(doc) {
    doc.usersObj = Users.find({
      _id: { $in: doc.users }
    });
    return doc;
  }
});

Users = new Mongo.Collection('users', {
  transform: function(doc) {
    doc.eventsObj = Events.find({
      users: { $in: [ doc._id ] }
    });
    return doc;
  }
});
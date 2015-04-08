//Template can't be named 'events' so we called it 'eventsTemplate'
Template.eventsTemplate.helpers({
  events: function() {
    return Events.find({}, {
      sort: { name: 1 }
    });
  },
  getUserName: function(userId) {
    return Users.findOne(userId).name;
  }
});
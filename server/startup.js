Meteor.startup(function() {
  //insert initial data
  if (!Users.findOne()) {
    var user1 = Users.insert({
      name: 'Josh'
    });

    var user2 = Users.insert({
      name: 'Bob'
    });

    var user3 = Users.insert({
      name: 'Marry'
    });
  }

  if (!Events.findOne()) {
    Events.insert({
      name: 'Metallica concert',
      users: [ user1, user2 ]
    });

    Events.insert({
      name: 'Meteor meetup Prague',
      users: [ user1, user2, user3 ]
    });

    Events.insert({
      name: 'Meteor meetup Bratislava',
      users: [ user1, user3 ]
    });

    Events.insert({
      name: 'Some reggae festival',
      users: [ user2 ]
    });
  }
});
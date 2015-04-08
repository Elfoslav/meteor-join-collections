Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('users')
    ];
  }
});

Router.route('/events/:id', {
  name: 'event',
  waitOn: function() {
    return [
      Meteor.subscribe('events', this.params.id),
      Meteor.subscribe('eventUsers', this.params.id)
    ];
  }
});

Router.route('/users/:id', {
  name: 'user',
  waitOn: function() {
    return [
      Meteor.subscribe('users', this.params.id),
      Meteor.subscribe('userEvents', this.params.id)
    ];
  }
});

Router.configure({
  layoutTemplate: 'layout'
});
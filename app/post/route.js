import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model: function() {
    var posts = this.store.query('post', {});
    return Ember.RSVP.hash({
      posts: posts,
      isIndex: true,
      isAuthenticated: this.get('session.isAuthenticated')
    });
  }
});

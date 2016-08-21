import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  showLogoutButton: Ember.computed.bool('session.isAuthenticated'),
  actions: {
    invalidateSession() {
      this.sendAction('invalidateSession');
    }
  }
});

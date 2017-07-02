import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    didTransition() {
      window.scroll(0, 0);
      return true; // Bubble the didTransition event
    },
    invalidateSession() {
      this.get('session').invalidate();
    },
    error(error)  {
      if (error && error.errors.length && error.errors[0].status === '404') {
        this.transitionTo('404');
      }
    }
  }
});

import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  trustedHosts: [
    'industrialmusicelectronics.herokuapp.com',
  ],
  headers: Ember.computed('session.session', {
    get() {
      const headers = {};
      this.get('session').authorize('authorizer:devise', (headerName, headerValue) => {
        headers[headerName] = headerValue;
        return headers;
      });

      return headers;
    }
  })
});

import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import config from 'harvestman-frontend/config/environment';

export default ActiveModelAdapter.extend({
  authorizer: 'authorizer:devise',
  host: config.backendHost,
  namespace: 'api',
  flashMessages: Ember.inject.service(),
  ajax(url, type, hash) {
    let promise = this._super(url, type, hash);
    promise.then(() => {
      if (type === 'POST') {
        this.get('flashMessages').success('Created!', { sticky: true });
      } else if (type === 'PUT') {
        this.get('flashMessages').success('Updated!', { sticky: true });
      }
    }).catch((error) => {
      this.get('flashMessages').danger(error, { sticky: true });
    });
    return promise;
  }
});

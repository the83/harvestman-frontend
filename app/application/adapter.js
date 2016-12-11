import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';
import config from 'harvestman-frontend/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  host: config.backendHost,
  namespace: 'api',
  flashMessages: Ember.inject.service(),

  ajax(url, type, hash) {
    let promise = this._super(url, type, hash);

    promise.then(() => {
      if (type === 'POST') {
        this.get('flashMessages').success('Created!', { sticky: false });
      } else if (type === 'PUT') {
        this.get('flashMessages').success('Updated!', { sticky: false });
      }
    });

    promise.catch((error) => {
      if (error && error.errors && error.errors.length && error.errors[0].status === '404') {
        return this.transitionTo('index');
      }
      this.get('flashMessages').danger(error, { sticky: true });
    });

    return promise;
  }
});

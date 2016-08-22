import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import config from 'harvestman-frontend/config/environment';

export default ActiveModelAdapter.extend({
  authorizer: 'authorizer:devise',
  host: config.backendHost,
  namespace: 'api',
});

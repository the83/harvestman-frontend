import ApplicationAdapter from 'harvestman-frontend/application/adapter';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  ajax: Ember.inject.service(),
  deleteRecord(store, type, snapshot) {
    return this.get('ajax').request(
      `/api/v1/manuals/${snapshot.id}`,
      { method: 'DELETE' }
    );
  }
});

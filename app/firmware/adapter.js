import ApplicationAdapter from '../application/adapter';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  ajax: Ember.inject.service(),
  deleteRecord(store, type, snapshot) {
    return this.get('ajax').request(
      `${this.get('host')}/api/v1/firmwares/${snapshot.id}`,
      { method: 'DELETE' }
    );
  }
});

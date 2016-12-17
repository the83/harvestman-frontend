import EmberUploader from 'ember-uploader';
import Ember from 'ember';
import config from 'harvestman-frontend/config/environment';

export default EmberUploader.FileField.extend({
  session: Ember.inject.service(),

  fileModel: Ember.computed('objectType', function() {
    return `${this.get('objectType')}.${this.get('childType')}`;
  }),

  uploadFiles(files, headers) {
    const CustomUploader = EmberUploader.Uploader.extend({
      ajaxSettings: { headers }
    });

    const host = config.backendHost;
    const uploadUrl = `${host}/api/v1/${this.get('childType')}s?parent_id=${this.get('objectId')}&parent_type=${this.get('objectType')}` ;
    const uploader = CustomUploader.create({
      url: uploadUrl,
      paramName: this.get('childType'),
    });

    uploader.upload(files[0]).then((response) => {
      this.get(`model.${this.get('childType')}s`).pushObject(
        this.get('store').createRecord(this.get('fileModel'), response[this.get('childType')])
      );
    });
  },

  filesDidChange: function(files) {
    this.get('session').authorize('authorizer:devise', (headerName, headerValue) => {
      const headers = {};
      headers[headerName] = headerValue;
      this.uploadFiles(files, headers);
    });
  }
});

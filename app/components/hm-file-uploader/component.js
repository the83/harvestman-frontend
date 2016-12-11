import EmberUploader from 'ember-uploader';
import Ember from 'ember';
import config from 'harvestman-frontend/config/environment';

export default EmberUploader.FileField.extend({
  session: Ember.inject.service(),

  imageModel: Ember.computed('objectType', function() {
    return `${this.get('objectType')}.image`;
  }),

  uploadFiles(files, headers) {
    const CustomUploader = EmberUploader.Uploader.extend({
      ajaxSettings: {
        headers
      }
    });

    const host = config.backendHost;
    const uploadUrl = `${host}/api/v1/images?parent_id=${this.get('objectId')}&parent_type=${this.get('objectType')}` ;
    const uploader = CustomUploader.create({
      url: uploadUrl,
      paramName: 'image'
    });

    uploader.upload(files[0]).then((response) => {
      this.get('model.images').pushObject(
        this.get('store').createRecord(this.get('imageModel'), response.image)
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

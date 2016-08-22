import EmberUploader from 'ember-uploader';
import Ember from 'ember';
import config from 'harvestman-frontend/config/environment';

export default EmberUploader.FileField.extend({
  imageModel: Ember.computed('objectType', function() {
    return `${this.get('objectType')}.image`;
  }),

  filesDidChange: function(files) {
    var CustomUploader = EmberUploader.Uploader.extend({
      headers: {},
      _ajax: function(settings) {
        settings = Ember.merge(settings, this.getProperties('headers'));
        return this._super(settings);
      }
    });

    const host = config.backendHost;
    const uploadUrl = `${host}/api/v1/images?parent_id=${this.get('objectId')}&parent_type=${this.get('objectType')}` ;
    const uploader = CustomUploader.create({
      url: uploadUrl,
      headers: {
        "X-XSRF-TOKEN": decodeURIComponent(
          Ember.get(
            document.cookie.match(/XSRF\-TOKEN\=([^;]*)/), "1"
          )
        )
      },
      paramName: 'image'
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]).then((response) => {
        this.get('model.images').pushObject(
          this.get('store').createRecord(this.get('imageModel'), response.image)
        );
      });
    }
  }
});

import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    images: { embedded: 'always' },
    firmwares: { embedded: 'always' },
    manuals: { embedded: 'always' },
  },
  serialize: function(record, options) {
    var json = this._super(record, options);
    json.images_attributes = json.images;
    delete json.images;

    json.firmwares_attributes = json.firmwares;
    delete json.firmwares;

    json.manuals_attributes = json.manuals;
    delete json.manuals;

    return json;
  }
});

import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    images: { embedded: 'always' }
  },
  serialize: function(record, options) {
    var json = this._super(record, options);
    json.images_attributes = json.images;
    delete json.images;
    return json;
  }
});

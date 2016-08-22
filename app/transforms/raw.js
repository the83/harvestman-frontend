import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(data) {
    return data;
  },
  serialize: function(data) {
    return data;
  }
});

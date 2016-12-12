import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product'),
  firmware: DS.attr('raw'),
  name: DS.attr('string'),
});

import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product'),
  manual: DS.attr('raw'),
  name: DS.attr('string'),
});

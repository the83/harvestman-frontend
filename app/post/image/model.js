import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  image: DS.attr('raw'),
});

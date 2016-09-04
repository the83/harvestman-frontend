import DS from 'ember-data';

export default DS.Model.extend({
  permalink: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  images: DS.hasMany('post/image', { async: 'false' }),
  heroImage: Ember.computed('images.[]', function() {
    return this.get('images.firstObject.image.url');
  }),
  date: DS.attr('string')
});

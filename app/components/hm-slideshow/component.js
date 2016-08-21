import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $('.carousel-item').eq(0).addClass('active');
  },

  elementId: Ember.computed('slideshowId', function() {
    return '#' + this.get('slideshowId');
  })
});

import Ember from 'ember';
const CAROUSEL_INTERVAL = 5000;

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('.carousel-item').eq(0).addClass('active');

    const carousel = Ember.$('.carousel').carousel({
      interval: CAROUSEL_INTERVAL
    });

    this.carousel = carousel;
  },

  elementId: Ember.computed('slideshowId', function() {
    return `#${this.get('slideshowId')}`;
  }),

  actions: {
    goPrev() {
      this.carousel.carousel('prev');
    },

    goNext() {
      this.carousel.carousel('next');
    }
  }
});

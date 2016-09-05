import Ember from 'ember';

export default Ember.Component.extend({
  selectedTab: 'description',
  showDescription: Ember.computed.equal('selectedTab', 'description'),
  showFeatures: Ember.computed.equal('selectedTab', 'features'),
  showManual: Ember.computed.equal('selectedTab', 'manual'),
  showWhereToBuy: Ember.computed.equal('selectedTab', 'whereToBuy'),
  showSlideshow: Ember.computed.gt('product.images.length', 1),
  firstImageUrl: Ember.computed('product.images.[]', function() {
    return this.get('product.images.firstObject.image.url');
  })
});

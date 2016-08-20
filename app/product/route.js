import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let products = this.store.query('product', {});
    return Ember.RSVP.hash({
      products: products,
      isIndex: true,
    });
  }
});

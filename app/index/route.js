import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    const posts = this.store.query('post', {});
    const products = this.store.query('product', {});

    return Ember.RSVP.hash({
      posts: posts,
      products: products,
    });
  }
});

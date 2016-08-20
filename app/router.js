import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', { resetNamespace: true, path: '/products' });
  this.route('product.new', { path: '/products/new'});
  this.route('product.edit', { path: '/products/:product_id/edit'});
  this.route('product.show', { path: '/products/:product_id'});
});

export default Router;

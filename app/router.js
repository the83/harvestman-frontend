import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '' });
  this.route('product', { resetNamespace: true, path: '/products' });
  this.route('product.new', { path: '/products/new'});
  this.route('product.edit', { path: '/products/:product_id/edit'});
  this.route('product.show', { path: '/products/:product_id'});

  this.route('post', { resetNamespace: true, path: '/news' });
  this.route('post.new', { path: '/news/new' });
  this.route('post.edit', { path: '/news/:post_id/edit' });
  this.route('post.show', { path: '/news/:post_id' });
  this.route('login');
  this.route('404');
  this.route('bad_url', { path: '/*badurl' });
  this.route('about');
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from 'store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', function () {
    this.route('add');
  });
  this.route('products', function () {
    this.route('add');
    this.route('update', { path: 'update/:product_id' });
  });
<<<<<<< HEAD
  this.route('store', function() {
    this.route('add');
    this.route('addProduct');
    this.route('edit');
  });
=======
  this.route('gestionStock');
  this.route('store');
>>>>>>> b060d80e829908dbcc0bb1df2a20f717bdf9face
});

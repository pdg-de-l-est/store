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
  this.route('store', function () {
    this.route('detail', { path: 'detail/:section_id' }, function () {
      this.route('add-product', { path: 'add-product/:section_id' });
      this.route('edit-product', { path: 'edit-product/:product_id' });
      this.route('edit-pack', { path: 'edit-pack/:pack_id' });
    });
    this.route('index', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:section_id' });
      this.route('add-pack');
      this.route('delete-section', { path: 'delete-section/:section_id' });
    });
  });
  this.route('gestionStock', function () {
    this.route('section', { path: 'section/:section_id' });
  });
  this.route('dashboard', function () {
    this.route('detail-commande', { path: 'detail-commande/:order_id' });
    this.route('associated-products');
  });
  this.route('gestionEmployee');
  this.route('accueil');
});

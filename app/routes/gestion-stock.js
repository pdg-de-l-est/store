import Route from '@ember/routing/route';

export default class GestionStockRoute extends Route {
  model() {
    return this.store.findAll('section');
  }
}

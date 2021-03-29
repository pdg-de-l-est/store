import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class GestionStockRoute extends Route {
  model() {
    return this.store.findAll('section');
  }

  @action select(idSelected) {
    return this.store.findByIds('product',idSelected);
  }
}

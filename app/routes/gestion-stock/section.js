import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action, set } from '@ember/object';

export default class GestionStockSectionRoute extends Route {
  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
    });
  }

  @action update(product, stockAdded) {
    set('product', 'stock', product.stock + stockAdded);
  }
}

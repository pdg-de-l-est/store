import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class GestionStockSectionRoute extends Route {
  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
    });
  }

  @action update(product) {
    product.stock += parseInt(product._stock);
    product.save();
  }
}

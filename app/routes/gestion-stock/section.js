import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GestionStockSectionRoute extends Route {
  @tracked actualSection;

  model(params) {
    document.getElementById('choix').style.display = 'none';
    this.actualSection = this.store.findRecord('section', params.section_id);
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
    });
  }

  @action update(product) {
    product.stock += parseInt(product._stock);
    product.save();
    //   .then(() => {
    //   this.transitionTo('gestionStock.section', product.section.id);
    // });
  }

  @action multiUpdate(products, stock) {
    let checked = products._objects.filterBy('checked', true);
    checked.forEach((product) => {
      product.stock += parseInt(stock);
      product.save();
    });
    // this.transitionTo('gestionStock.section', products.section.id);
  }

  @action checked(product) {
    product.checked = product.checked === false;
  }
}

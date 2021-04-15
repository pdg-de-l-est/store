import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreAddPackRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
      product: {},
    });
  }
  @action save(p) {
    var prix=0;
    p.packs.forEach(element => {
      prix = prix + element.prix;
    })
    p.promotion = prix-p.prix;
    let product = this.store.createRecord('product', p);
    product.save().then(() => {
      this.transitionTo('store');
    });
  }
}

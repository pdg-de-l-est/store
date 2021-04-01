import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreEditProductRoute extends Route {
  model(params) {
    return RSVP.hash({
      productToEdit: this.store.findRecord('product', params.product_id),
    });
  }

  @action edit(productEditing) {
    productEditing.save().then(() => {
      this.transitionTo('store');
    });
  }
}

import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreAddProductRoute extends Route {
  model(params){
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id),
      product: {}
    })
  }

  @action save(productData,m){
    productData.section=m.section;
    let product = this.store.createRecord('product', productData);
    product.save().then(() => {
      this.transitionTo('store.detail',m.section.id);
    });
  }
}

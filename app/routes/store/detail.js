import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import jQuery from "jquery";
import Ember from "ember";

export default class StoreDetailRoute extends Route {
  model(params) {
    return RSVP.hash({
      detailSection: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
    });
  }

  @action delete(productDelete) {
    let product = this.store.peekRecord('product', productDelete);
    product.destroyRecord();
  }

  initUi() {
    jQuery('.ui.modal').modal('hideAll');
  }

  @action didTransition() {
    Ember.run.next(this, 'initUi');
  }
}

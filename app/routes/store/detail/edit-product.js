import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import jQuery from "jquery";
import Ember from "ember";

export default class StoreEditProductRoute extends Route {
  model(params) {
    return RSVP.hash({
      productToEdit: this.store.findRecord('product', params.product_id,{include: 'section'}),
    });
  }

  @action save(productEditing,idSection) {
    productEditing.save().then(() => {
      this.transitionTo('store.detail', idSection);
    });
  }

  initUi() {
    jQuery('.ui.modal')
      .modal({
        closable: false,
      })
      .modal('show');
  }

  @action didTransition() {
    Ember.run.next(this, 'initUi');
  }
}

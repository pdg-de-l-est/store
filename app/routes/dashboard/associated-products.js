import Route from '@ember/routing/route';
import jQuery from "jquery";
import Ember from "ember-source/dist/packages/@ember/-internals/runtime/lib/mixins/-proxy";
import RSVP from "rsvp";

export default class DashboardAssociatedProductsRoute extends Route {

  model(params) {
    return RSVP.hash({
      detailSection: this.store.findRecord('product', params.product_id, {
        include: 'associatedproducts',}),
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

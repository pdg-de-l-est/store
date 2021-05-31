import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';
import { action, set } from '@ember/object';
import jQuery from "jquery";
import Ember from "ember-source/dist/packages/@ember/-internals/runtime/lib/mixins/-proxy";

export default class DashboardDetailCommandeRoute extends AbstractRouteRoute {
  model(params) {
    return RSVP.hash({
      order: this.store.findRecord('order', params.order_id, {
        include: 'orderdetails.product.section',
      }),
      connected: this.userAuth.user,
    });
  }

  @action save(orderdetails) {
    orderdetails.save();
  }

  @action valider(order){
    order.status = "prepared";
    order.save().then(() => {
      this.transitionTo('dashboard');
    });
  }

  @action prepareAll(order){
    //initalisation des compteurs
    let len = 0;
    let nbPrepared = 0;
    //Première boucle pour incrémenter les compteurs
    order.orderdetails.forEach(element => {
      len = len+1;
      if( element.prepared == 1){
        nbPrepared = nbPrepared+1;
      }
    });
    //Si tous les orderdetails sont préparés alors on les "déprépare"
   if(len == nbPrepared){
        order.orderdetails.forEach(element => {
          element.prepared = 0;
          this.save(element);
      });
    }
    //Sinon on les prépare tous
    else{
      order.orderdetails.forEach(element => {
        element.prepared = 1;
        this.save(element);
    });
  }
 }

  initUi() {
    jQuery('.ui.modal').modal('hideAll');
  }

  @action didTransition() {
    Ember.run.next(this, 'initUi');
  }
}

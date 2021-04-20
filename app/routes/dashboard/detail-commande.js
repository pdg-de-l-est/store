import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';
import { action, set } from '@ember/object';

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
      this.transitionTo('detail-commande');
    });
  }
}

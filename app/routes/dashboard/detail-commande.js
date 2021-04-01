import AbstractRouteRoute from '../abstract-route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';
import { sort } from '@ember/object/computed';

export default class DashboardDetailCommandeRoute extends AbstractRouteRoute {
  model(params) {
    return RSVP.hash({
      order: this.store.findRecord('order', params.order_id, {
        include: 'orderdetails.product.section',
      }),
      connected: this.userAuth.user,
      // listsorted: sort(this.order.orderdetails.product, function (a, b) {
      //   if (a.id > b.id) {
      //     return 1;
      //   } else if (a.id < b.id) {
      //     return -1;
      //   }
      //   return 0;
      // }),
    });
  }
}

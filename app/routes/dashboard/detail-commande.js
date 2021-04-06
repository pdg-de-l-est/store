import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';

export default class DashboardDetailCommandeRoute extends AbstractRouteRoute {
  model(params) {
    return RSVP.hash({
      order: this.store.findRecord('order', params.order_id, {
        include: 'orderdetails.product.section',
      }),
      connected: this.userAuth.user,
    });
  }
}

import AbstractRouteRoute from '../abstract-route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';

export default class DashboardDetailCommandeRoute extends AbstractRouteRoute {
  model(params) {
    return RSVP.hash({
      order: this.store.findRecord(
        'order',
        params.order_id,
        { include: 'orderdetail' },
        { include: 'products' }
      ),
      connected: this.userAuth.user,
    });
  }
}

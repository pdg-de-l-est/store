import AbstractRouteRoute from './abstract-route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';

export default class DashboardRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      employees: this.store.findAll('employee', { include: 'orders' }),
      connected: this.userAuth.user,
    });
  }

  @action delete(orderToDelete) {
    let order = this.store.peekRecord('order', orderToDelete);
    order.destroyRecord().then(() => {
      this.transitionTo('dashboard');
    });
  }
}

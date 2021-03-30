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
  @action remove(employee, model) {
    set(model, 'deleted', employee);
    employee.destroyRecord().then(() => {});
  }
}

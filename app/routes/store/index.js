import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreIndexRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section', { include: 'products' }),
    });
  }

  @action delete(section) {
    if (section.products.length > 0) {
      this.transitionTo('users');
    } else {
      section.destroyRecord();
    }
  }
}

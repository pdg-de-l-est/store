import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreIndexRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section', { include: 'products' }),
    });
  }

  @action delete(sectionDelete) {
    let section = this.store.peekRecord('section', sectionDelete, {
      include: 'products',
    });
    console.log(section.name, ' ', section.products);
  }
}

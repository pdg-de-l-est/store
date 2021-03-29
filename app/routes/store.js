import AbstractRouteRoute from './abstract-route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      connected: this.userAuth.user,
    });
  }

  @action delete(sectionDelete) {
    let section = this.store.peekRecord('section', sectionDelete);
    section.destroyRecord();
  }
}

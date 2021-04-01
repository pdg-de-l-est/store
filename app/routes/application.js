import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import AbstractRouteRoute from './abstract-route';
import { action } from '@ember/object';

export default class ApplicationRoute extends AbstractRouteRoute {
  @service userAuth;
  model() {
    return RSVP.hash({
      connected: this.userAuth.user,
    });
  }
  @action logout() {
    this.userAuth.logout();
  }
}

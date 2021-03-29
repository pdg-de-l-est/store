import Route from '@ember/routing/route';
import AbstractRouteRoute from "./abstract-route";
import RSVP from 'rsvp';

export default class StoreRoute extends AbstractRouteRoute {
  model(){
    return RSVP.hash({
      sections: this.store.findAll('section'),
      connected: this.userAuth.user,
    })
  }
}

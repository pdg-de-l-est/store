import AbstractRouteRoute from "./abstract-route";
import RSVP from "rsvp";

export default class AccueilRoute extends AbstractRouteRoute {
  model(){
    return RSVP.hash({
      employees: this.store.findAll('employee', { include: 'orders' }),
      connected: this.userAuth.user,
    });
    
  }
}

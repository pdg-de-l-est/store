import RSVP from "rsvp";
import AbstractRouteRoute from "./abstract-route";

export default class ApplicationRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      connected: this.userAuth.user,
    });
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class AbstractRouteRoute extends Route {
  @service userAuth;
  @service store;
  redirect() {
    if (!this.userAuth.isAuth) {
      this.transitionTo('index');
    }
  }
}

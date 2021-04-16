import AbstractRouteRoute from '../abstract-route';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import jQuery from "jquery";
import Ember from "ember";

export default class StoreIndexRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section', { include: 'products' }),
    });
  }

  @action delete(section) {
    if (section.products.length > 0) {
      this.transitionTo('store.index.delete-section', section.id);
    } else {
      section.destroyRecord();
    }
  }

  initUi() {
    jQuery('.ui.modal').modal('hideAll');
  }

  @action didTransition() {
    Ember.run.next(this, 'initUi');
  }
}

import Route from '@ember/routing/route';
import { action } from '@ember/object';
import jQuery from 'jquery';
import Ember from 'ember';

export default class StoreAddRoute extends Route {
  model() {
    return {};
  }

  @action save(sectionData) {
    let section = this.store.createRecord('section', sectionData);
    section.save().then(() => {
      this.transitionTo('store');
    });
  }

  initUi() {
    jQuery('.ui.modal')
      .modal({
        closable: false,
      })
      .modal('show');
  }

  @action didTransition() {
    Ember.run.next(this, 'initUi');
  }
}

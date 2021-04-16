import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import jQuery from 'jquery';
import Ember from 'ember';

export default class StoreEditRoute extends Route {
  model(params) {
    return RSVP.hash({
      sectionToEdit: this.store.findRecord('section', params.section_id),
    });
  }

  @action edit(sectionEditing) {
    sectionEditing.save().then(() => {
      this.transitionTo('store.detail', sectionEditing.section.id);
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

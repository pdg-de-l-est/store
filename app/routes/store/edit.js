import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreEditRoute extends Route {
  model(params) {
    return RSVP.hash({
      sectionToEdit: this.store.findRecord('section', params.section_id),
    });
  }

  @action edit(sectionEditing) {
    sectionEditing.save().then(() => {
      this.transitionTo('store/detail/' + sectionEditing.section.id);
    });
  }
}

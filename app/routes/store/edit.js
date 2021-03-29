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
    let sec = this.store
      .findRecord('section', sectionEditing)
      .then(function (post) {
        post.name = sectionEditing.name;
        post.description = sectionEditing.description;
      });
    sec.save();
  }
}

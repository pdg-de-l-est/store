import Route from '@ember/routing/route';
import { action } from '@ember/object';

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
}

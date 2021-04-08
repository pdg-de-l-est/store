import Route from '@ember/routing/route';
import RSVP from "rsvp";
import { action } from '@ember/object';

export default class StoreDeleteSectionRoute extends Route {
  model(params) {
    return RSVP.hash({
      sectionDelete: this.store.findRecord('section', params.section_id,{include: 'products'}),
    });
  }
  @action deleteAll(sectionId){
    let products = this.store.peekAll('product', { sql: 'idSection = ' + sectionId });
    debugger;
    products.destroyRecord();
    let section = this.store.peekRecord('section', sectionId);
    section.destroyRecord();
    this.transitionTo('store.index');
  }
}

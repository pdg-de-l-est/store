import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
export default class StoreDetailRoute extends Route {
  model(params){
    return RSVP.hash({
      detailSection: this.store.findRecord('section', params.section_id, { include: 'products'}),
    });
  }
}

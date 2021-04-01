import AbstractRouteRoute from "../abstract-route";
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreIndexRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section')
    });
  }

  @action delete(sectionDelete) {
    let section = this.store.findRecord('section', sectionDelete,{
      include : 'products'
    });
    if(section.products.length > 0){
      this.transitionTo('dashboard');
    }
    else{
      section.destroyRecord();
    }
  }
}


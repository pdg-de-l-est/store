import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreDeleteSectionRoute extends Route {
  model(params) {
    return RSVP.hash({
      sectionDelete: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
      sections: this.store.findAll('section'),
      secToChange: {},
    });
  }
  @action deleteAll(sectionId) {
    this.store
      .findRecord('section', sectionId, { include: 'products', reload: true })
      .then((section) => {
        this.deleteProducts(section.products).then(() => {
          section.destroyRecord().then(() => {
            this.transitionTo('store');
          });
        });
      });
  }
  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      this.controllerFor(this.routeName).set('activeImg', p.image);
      await p.destroyRecord();
    }
  }
  setupController(controller, model) {
    controller.set('taille', model.sectionDelete.products.length);
    controller.set('products', model.sectionDelete.products);
  }
  @action changeAll(sectionId, secToChange) {
    this.store
      .findRecord('section', sectionId, { include: 'products', reload: true })
      .then((section) => {
        this.changeProducts(section.get('products'), secToChange).then(() => {
          section.destroyRecord().then(() => {
            this.transitionTo('store');
          });
        });
      });
  }
  async changeProducts(products, secToChange) {
    while (products.firstObject) {
      let p = products.firstObject;
      p.section=secToChange;
      await p.save();
    }
  }
}

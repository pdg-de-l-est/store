import Controller from '@ember/controller';
import groupBy from 'ember-group-by';

export default class DashboardDetailCommandeController extends Controller {
  @groupBy('model.order.orderdetails', 'sectionName')
  sections;

  init() {
    super.init(...arguments);
    console.log('Test');
  }

  


}

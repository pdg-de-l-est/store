import Model, { attr, belongsTo } from '@ember-data/model';


export default class OrderdetailModel extends Model {
  @belongsTo('order') order;
  @belongsTo('product') product;
  @attr('number') quantity;
  @attr('number') prepared;

  get sectionName() {
    let section = this.product.get('section');
    if (section) {
      return section.get('name');
    }
    return null;
  }
}

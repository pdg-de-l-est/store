import Model from '@ember-data/model';
import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailreplaceModel extends Model {
  @belongsTo('orderdetail') orderdetail;
  @belongsTo('product') product;
  @attr('number') quantityReplace;
}

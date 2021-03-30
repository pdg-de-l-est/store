import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @belongsTo('order') order;
  @belongsTo('product') product;
  @attr('int') quantity;
  @attr('tinyint') prepared;
}

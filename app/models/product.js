import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('number') stock;
  @attr('string') image;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
}

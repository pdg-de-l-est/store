import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') comments;
  @attr('number') stock;
  @attr('string') image;
  @attr('number') price;
  @attr('number') promotion;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
  @tracked checked = false;
}

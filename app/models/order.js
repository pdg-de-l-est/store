import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('string') dateCreation;
  @attr('string') status;
  @attr('number') itemsNumber;
  @attr('number') amount;
  @belongsTo('user') user;
  @belongsTo('employee') employee;
  @hasMany('orderdetail', { inverse: null }) orderdetails;
}

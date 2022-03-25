import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') comments;
  @attr('number') price;

  /*get count() {
    return this name.length;
  }*/
}

import Model, { attr, belongsTo } from '@ember-data/model';

export default class FooModel extends Model {
  @attr name;
  @belongsTo('bar', { async: false, inverse: null }) bar;
}

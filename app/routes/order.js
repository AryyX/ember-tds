import Abstractroute from './AbstractRoute';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class OrderRoute extends Abstractroute {
  @service router;
  @service store;

  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'user,orderdetails.product',
    });
  }
  @action retour() {
    this.transitionTo('board');
  }
}

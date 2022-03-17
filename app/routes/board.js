import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/action';

export default class BoardRoute extends Abstractroute {
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }

  /*model() {
    return this.userAuth.getUser();
  }*/

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}

import Service from '@ember/service';
import { dProducts, dPromos } from 'tds/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeService() {
    return dProducts.filterBy('active', true);
  }
  get countActive() {
    return this.activeService.length;
  }
  get sumActive() {
    let callSum = (somme, product) => product.price + somme;
    return this.activeService.reduce(callSum, 0);
  }
}

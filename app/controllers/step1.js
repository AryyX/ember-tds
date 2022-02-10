import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  @tracked dispoItems_ = [];
  includedItems = [];
  @tracked includedItems_ = [];

  @action
  changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action
  add(source, dest, what) {
    dest.pushObjects(what);
    source.removeObjects(what);
    this.dispoItems_ = [];
  }

  /*@action
  remove(source, dest, what) {
    source.pushObjects(what);
    dest.removeObjects(what);
  }*/

  @action
  changeIncluded(elements) {
    this.includedItems_ = elements;
  }
}

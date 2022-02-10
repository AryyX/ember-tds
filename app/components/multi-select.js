import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //liste trackée tableau d'objets
  selected = []; //liste sélectionnée
  id = 'id'; //variable d'indentifiant string id

  constructor() {
    super(...arguments); //on appelle le parent et on passe tous les arguments
    this.elements = this.args.elements; //definit tous les elements de la liste
    this.selected = this.args.selected; //definit l'element de la liste select
    this.id = this.args.identifier || 'id'; //attribue l'id
  }

  @action
  change(event) {
    let select = event.target; //designe un element comme selectionné
    var selectedIds = [...select.selectedOptions].map((option) => option.value);
    if (this.args.onChange) {
      //si on clique sur un autre element, ca met la nouvelle valeur dans une nouvelle variable elm
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0
        )
      );
    }
  }
}

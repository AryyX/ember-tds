import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params) {
  const [items, value, prop] = params; // prend param et l'affecte à ces variables
  let id = prop || 'id'; //création d'une variable id qui prend le param prop et un string 'id'
  return items.filterBy(id, value[id]).length > 0; //filtrer la liste de items par la valeur de id et sa taille
});

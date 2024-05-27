const { List } = require('immutable');

export function getLostObject (array) {
  return List(array);
}

export function addElementToList (list, element) {
  return List(list.append(element));
}

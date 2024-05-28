import { List } from 'immutable';

function getListObject(array) {
  return List(array);
}

function addElementToList(list, element) {
  return List(list.append(element));
}

module.exports = [getListObject, addElementToList];

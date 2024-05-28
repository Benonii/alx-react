import { Map } from 'immutable';

function accessImmutableObject(object, array) {
  const map = Map(object);
  return array.reduce((acc, key) => acc && acc[key], map.toJS());
}

module.exports = accessImmutableObject;

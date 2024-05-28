import { Map } from 'immutable';

function accessImmutableObject(object, array) {
  const map = Map(array);
  return map.reduce((acc, key) => acc && acc[key], object);
}

module.exports = accessImmutableObject;

import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  const map = fromJS(object);
  return array.reduce((acc, key) => acc && acc.get(key), map);
}

module.exports = accessImmutableObject;

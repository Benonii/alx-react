import { Map } from 'immutable';

function getImmutableObject (object) {
  return Map(object);
}

module.exports = getImmutableObject;

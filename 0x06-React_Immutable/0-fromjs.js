import { fromJS } from ('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;

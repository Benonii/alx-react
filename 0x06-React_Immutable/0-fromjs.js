const { fromJS } = require('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;

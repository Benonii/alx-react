const { fromJS } = require('immutable');

export default function getImmutableObject(object) {
  return fromJS(object);
}

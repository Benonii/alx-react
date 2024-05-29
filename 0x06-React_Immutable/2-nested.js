import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = fromJS(object);
  return array.reduce((acc, key) => acc && acc.get(key), map);
}

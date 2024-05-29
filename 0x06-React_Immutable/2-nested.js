import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = Map(object);
  return array.reduce((acc, key) => acc && acc.get(key), map);
}

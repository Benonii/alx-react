const { is } = require('immutable');

export default function areMapsEqual (map1, map2) {
  return is(map1, map2);
}

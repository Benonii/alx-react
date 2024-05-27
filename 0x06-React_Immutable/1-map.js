const { Map } = require('immutable');

function getImmutableObject (object) {
  return Map(object);
}

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

console.log(getImmutableObject(obj));
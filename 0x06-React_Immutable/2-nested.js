
function accessImmutableObject (object, array) {
  return array.reduce((acc, key) => acc && acc[key], object);
}

console.log(accessImmutableObject({
  name: {
    first: 'Guillaume',
    last: 'Salva'
  }
}, ['name', 'first']));

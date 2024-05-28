function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => acc && acc[key], object);
}

module.exports = accessImmutableObject;

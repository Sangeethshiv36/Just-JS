const _ = {};

const newlyDiscoveredWeapons = {
  'Lead Pipe': true,
  Rope: true,
  Wrench: true,
  Revolver: false
};

const discoveredWeapons = {
  Revolver: true
};

_.defaults = (object, source) => {
  Object.keys(source).forEach((prop) => {
    if (object[prop] === undefined) {
      object[prop] = source[prop];
    }
  });
  return object;
};

const weaponsTracked = _.defaults(discoveredWeapons, newlyDiscoveredWeapons);

console.log(weaponsTracked);

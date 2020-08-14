// trigger warning : just my custom lodash transform function it has its flaws, but its just an excercise not perfect

const _ = {};

const rooms = [
  'Billiard Room',
  'Kitchen',
  'Library',
  'Conservatory',
  'Hall',
  'Dining Room'
];

const weapons = [
  'Revolver',
  'Knife',
  'Lead Pipe',
  'Candlestick',
  'Rope',
  'Wrench'
];

const suspects = [
  'Mr. Green',
  'Mrs. Peacock',
  'Prof. Plum',
  'Mrs. White',
  'Miss Scarlett',
  'Col. Mustard'
];

const gameData = [...rooms, ...weapons, ...suspects];

const cluesSoFar = {
  Revolver: true,
  Knife: true,
  'Billiards Room': true,
  'Miss Scarlett': true,
  Hall: true
};

_.transform = (object, iteratee, accumulator) => {
  const collectionType = Array.isArray(object);
  let returnValueIt = true;

  if (collectionType) {
    object.forEach((item, index) => {
      if (!returnValueIt && returnValueIt !== undefined) {
        return;
      }
      returnValueIt = iteratee(accumulator, item, index);
    });
  } else if (!collectionType && typeof object === 'object') {
    Object.keys(object).forEach((key) => {
      if (!returnValueIt && returnValueIt !== undefined) {
        console.log('in');
        return;
      }
      returnValueIt = iteratee(accumulator, object[key], key);
    });
  }
  return accumulator;
};

const a = _.transform(
  [2, 3, 4],
  function (result, n) {
    result.push((n *= n));
    return n % 2 == 0;
  },
  []
);

const b = _.transform(
  { a: 1, b: 2 },
  function (result, value) {
    result.push(value);
  },
  []
);

const summary = _.transform(
  gameData,
  (accumulator, key) => {
    if (cluesSoFar[key]) {
      accumulator.found.push(key);
    } else {
      accumulator.notFound.push(key);
    }
    return accumulator;
  },
  { found: [], notFound: [] }
);

const c = _.transform(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
  },
  {}
);

console.log(a);

console.log(b);

console.log(c);

console.log(summary);

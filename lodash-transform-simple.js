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

_.transform = (collection, iteratee, accumulator) => {
  let returnValueIt = true;

  //in the prev commit i did something stupid, which was i checked whether the 'collection' which we are getting is either object or array and if its arry i used collection.forEach and if its object i did Object.keys(collection).forEach , surprise surprise arrays are also of type object in javascript and it has indices as its key (0,1,2 i.e arr=[1,2,3] will be like {0:1,1:2,2:3} so i don't have to do whatever i did before, i can just simply do what i have done below.)

  // Also something to note here one reason we have an array is because only symbols and strings can be a key (property name ) of an object, numerics can't be but with arrays we can do that and also thats why when accessing object props through values we use the [] notation instead of dot notation.

  Object.keys(collection).forEach((key) => {
    if (!returnValueIt && returnValueIt !== undefined) {
      console.log('in');
      return;
    }
    returnValueIt = iteratee(accumulator, collection[key], key);
  });
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

const fp = {};

fp.filter = (predicate, collection) => {
  const clonedCollection = { ...collection };
  const result = [];
  Object.keys(clonedCollection).forEach((item, index) => {
    const isMatch = predicate(clonedCollection[item], index);
    if (isMatch) {
      result.push(clonedCollection[item]);
    }
  });
  return result;
};

const remainingSuspects = [
  { name: 'Prof Plum' },
  { name: 'Mrs. Peacock' },
  { name: 'Col Mustard' },
  { name: 'Mr. Green' }
];

const clues = fp.filter((suspect) => {
  const innocent = {
    'Col Mustard': true,
    'Prof Plum': true,
    'Mrs. Peacock': true,
    'Mr. Green': false
  };
  return innocent[suspect.name] === true;
}, remainingSuspects);

const evens = fp.filter(
  (item) => {
    return item % 2 === 0;
  },
  [1, 2, 3, 4]
);

const numArr = [2, 3, 2, 5, 3, 6, 7];

const uniques = fp.filter((item, index) => {
  return numArr.indexOf(item) === index;
}, numArr);

console.log(clues);
console.log(evens);
console.log(uniques);

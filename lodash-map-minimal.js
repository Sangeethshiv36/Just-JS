const _ = {};

// Normal Approach -- works only for array now, to make it work with object , use object.keys and foreach like the mapFp one
_.map = (collection, iteratee) => {
  const result = [];
  collection.forEach((item) => {
    result.push(iteratee(item));
  });
  return result;
};

const square = _.map([4, 8], (num) => {
  return num * num;
});

console.log(square);

//More Functional programming approach

_.mapFp = (iteratee, collection) => {
  const result = [];
  const clonedCollection = { ...collection };
  Object.keys(clonedCollection).forEach((item) => {
    result.push(iteratee(clonedCollection[item]));
  });
  return result;
};

const squareFp = _.mapFp(
  (num) => {
    return num * num;
  },
  [4, 8]
);

const users = _.mapFp(
  (user) => {
    return user.gender === 'male' ? `Mr. ${user.name}` : `Mrs. ${user.name}`;
  },
  [
    { name: 'Green', gender: 'male' },
    { name: 'Livia', gender: 'female' },
    { name: 'Tony', gender: 'male' }
  ]
);

console.log(squareFp);

console.log(users);

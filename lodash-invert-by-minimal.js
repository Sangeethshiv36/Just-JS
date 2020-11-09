const _ = {};

_.invertBy = (collection, iteratee) => {
  const clonedCollection = JSON.parse(JSON.stringify(collection)); //deep copy
  const elEntries = Object.entries(collection);
  const lookupTable = {};
  let result = null;
  const inverted = elEntries.map((arr) => {
    return ([arr[0], arr[1]] = [arr[1], arr[0]]);
  });
  const grouped = inverted.reduce((acc, curr) => {
    const key = curr[0];
    const value = curr[1];
    if (!acc[key]) {
      const valArr = [];
      valArr.push(value);
      acc[key] = valArr;
    } else {
      acc[key] = [...acc[key], value];
    }
    return acc;
  }, lookupTable);
  return grouped;
};

const inputObj = { a: 1, b: 2, c: 1, d: 1, e: 2, f: 2, g: 5, h: 1, i: 5 };

console.log(_.invertBy(inputObj));

// const val = _.invertBy(inputObj,(value) => {
// 	console.log(value);
//   return "group" + value;
// });

// console.log(val);

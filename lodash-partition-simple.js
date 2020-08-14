// iterator vs predicate - something to keep in mind.
// A simple function to parititon odd and even numbers in separate array
const _ = {};

_.partition = (list, predicate) => {
  const result = [[], []];

  list.forEach((item) => {
    if (predicate(item)) {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  });
  return result;
};

_.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

const firstDuplicate = (arr) => {
  const lookupTable = {};
  let result;
  arr.some((element) => {
    if (lookupTable[element]) {
      result = lookupTable[element];
      return true;
    } else {
      lookupTable[element] = element;
    }
  });
  return result;
};

console.log(firstDuplicate([1, 2, 3, 2, 5, 3, 4, 6]));
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

// if you use forEach line 15 will give "3" as the result and line 16 will give "2" as the result because you can't break from inside of a forLoop, since it
// takes a callback function and apply it to each element of an array until it hit the end/last element of an arrya. So use some() or every() which can be
// break after returning true or any value.

const uniqSort = (arr) => {
  const breadCrumbs = {};
  let resultArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!breadCrumbs[arr[i]]) {
      breadCrumbs[arr[i]] = arr[i];
      resultArr.push(arr[i]);
    }
  }
  return resultArr.sort((a, b) => a - b);
};

console.log(
  uniqSort([2, 1, 3, 2, 2, 4, 4, 8, 9, 10, 12, 10, 3, 5, 12, 8, 19, 9])
);

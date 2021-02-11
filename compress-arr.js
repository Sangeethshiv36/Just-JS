// Add your javascript here
const compressArr = (arr, n) => {
  let i = 0;
  let j = 0;
  arr.sort((a, b) => a - b);
  while (i < n) {
    j = i;
    while (j + 1 < n && arr[j + 1] == arr[j] + 1) {
      j++;
    }
    if (i == j) {
      console.log(arr[i] + ' ');
      document.write(`<span>&quot${arr[i]}&quot, </span>`);
      i++;
    } else {
      console.log(arr[i] + '-' + arr[j] + ' ');
      document.write(`<span>&quot${arr[i]}-${arr[j]}&quot, </span>`);
      i = j + 1;
    }
  }
};

const n = 10;
const arr = [1, 2, 3, 5, 6, 7, 9, 10, 12, 21];

compressArr(arr, n);

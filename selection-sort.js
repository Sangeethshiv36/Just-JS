const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        console.log('inside', array[j]);
        min = j;
      }
    }
    console.log('outside', array[min]);
    array[i] = array[min];
    array[min] = temp;
    console.log(array[min]);
  }
  return array;
}

console.log(selectionSort(numbers));

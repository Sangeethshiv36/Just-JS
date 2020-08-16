// Higher order function - a function which takes a function as argument or a function which returns a function.

const doArrayMath = (inputArr, mathOperation, operand) => {
  const output = [];
  inputArr.forEach((num) => {
    output.push(mathOperation(num, operand));
    //mathOperation is a function which is passed to doArrayMath as an argument
  });
  return output;
};

//doArrayMath is HOF and mathOperation is the callback fn. To understand async js one must know how these works.

const multiply = (number, multiple) => {
  return number * multiple;
};

const divide = (number, dividant) => {
  return number / dividant;
};

const add = (number, addition) => {
  return number + addition;
};

const subtract = (number, subtraction) => {
  return number - subtraction;
};

const multiplyResult = doArrayMath([2, 5, 6], multiply, 10);
const divideResult = doArrayMath([2, 5, 6], divide, 10);
const addResult = doArrayMath([2, 5, 6], add, 10);
const subtractResult = doArrayMath([2, 5, 6], subtract, 10);

console.log(multiplyResult);
console.log(divideResult);
console.log(addResult);
console.log(subtractResult);

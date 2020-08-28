const reverseString = (str) => {
  const charArr = [...str];
  return charArr.reverse().join('');
};

console.log(reverseString('Hello, World!'));
console.log(reverseString('Sangeeth Sivan'));

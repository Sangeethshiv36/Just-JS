// What i came up with for only 2 characters brackers '(' and ')'

const input = ')())';

const isBalanced = (input) => {
  const charArr = input.split('');
  if (charArr.length % 2 !== 0) {
    return 'Unbalanced because not even';
  }
  const filteredChar = charArr.filter((char) => char === '(');
  if (filteredChar.length === charArr.length / 2) {
    return `Its balanced`;
  }
  return 'unbalanced';
};

console.log(isBalanced(input));

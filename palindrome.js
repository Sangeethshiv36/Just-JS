const isPalindrome = (word) => {
  const reversedWord = word.toLowerCase().split('').reverse().join('');
  if (reversedWord === word.toLowerCase()) {
    return `The word ${word} is a palindrome!`;
  } else {
    return `The word ${word} is not a palindrome!`;
  }
};

console.log(isPalindrome('Anna'));
console.log(isPalindrome('Sangeeth'));
console.log(isPalindrome('UwU'));

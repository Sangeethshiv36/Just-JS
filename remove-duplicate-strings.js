const removeDuplicates = (str) => {
  const resultArr = [];
  const wordCache = {};
  const wordsArray = str.split(' ');
  wordsArray.forEach((word) => {
    if (!wordCache[word.toLowerCase()]) {
      wordCache[word.toLowerCase()] = word;
      resultArr.push(word);
    }
  });
  return resultArr.join(' ');
};

// One liner way handles cases but doesn't retain orginal chars case.
const removeDuplicates1 = (str) => {
  return [...new Set(str.toLowerCase().split(' '))].join(' ');
};

console.log(removeDuplicates1('This is a test test string.'));
console.log(removeDuplicates('Remove the duplicates Duplicates '));
console.log(removeDuplicates('Handle case sensitive Case'));
console.log(removeDuplicates('All is good and well and good '));

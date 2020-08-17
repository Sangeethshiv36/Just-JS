const generatedFunc = () => {
  let counter = 0;
  const incrementCounter = () => {
    return ++counter;
  };
  return incrementCounter;
};

const myFunc = generatedFunc(); // counter variable is stored as the closure in myFunc as part of the function returned (incrementCounter) from the generatedFunc() call.

console.log(myFunc()); //1
console.log(myFunc()); //2
console.log(myFunc()); //3
console.log(myFunc()); //4

// js remembers the value of counter variable from line 2 even after the myFunc exec context gets destroyed time the function got popped out of stack, reason being the concept of closure.

// this all has greater meaning and more explaination to it but i am just too lazy typing it out here.

// Self-Note : Check your write up on closure in your personal dev diary.

// Also this is just a standalone example of closure to demonstrate closure alone, i've already used closures on the currying example,memoization example and a few others i guess.

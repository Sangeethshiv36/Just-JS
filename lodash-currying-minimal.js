// Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

/* _.curry3 = (func) => {
   return (arg1) => {
     return (arg2) => {
      return (arg3) => {
        return func(arg1, arg2, arg3);
       };
    };
   };
 };*/

const _ = {};

const whoIsIt = (weapon, room, suspect, curried) => {
  return `It was ${suspect} in the ${room} with a ${weapon} !!! ${curried}`;
};

// here is a curry function -  takes function as an argument and return a function, it accepts the first argument of the passed in function and returns a function which accepts the second argument and so on.
_.curry = (func) => {
  return (curriedFn = (...args) => {
    if (args.length < func.length) {
      return (...nextArgs) => {
        return curriedFn(...args, ...nextArgs);
      };
    }
    return func(...args);
  });
};

const curriedWhoIsIt = _.curry(whoIsIt);

const guessLater = curriedWhoIsIt('Candlestick')('Conservatory')('Mr Green');

console.log(guessLater('Curriedddddd'));

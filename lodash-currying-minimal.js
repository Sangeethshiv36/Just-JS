const _ = {};

const whoIsIt = (weapon, room, suspect, curried) => {
  return `It was ${suspect} in the ${room} with a ${weapon} !!! ${curried}`;
};

// _.curry3 = (func) => {
//   return (arg1) => {
//     return (arg2) => {
//       return (arg3) => {
//         return func(arg1, arg2, arg3);
//       };
//     };
//   };
// };

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

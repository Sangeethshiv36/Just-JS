const fizzBuzz = (times) => {
  for (i = 1; i < times; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz ');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20);

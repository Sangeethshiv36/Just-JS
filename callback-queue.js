function printHello() {
  console.log('Hello1');
}

function printHello1() {
  console.log('Hello2');
}

function printHello2() {
  console.log('Hello3');
}

function blockForSomeTime() {
  let result = [];
  for (i = 0; i < 3000; i++) {
    result.push(i);
    console.log(i);
  }
  setTimeout(printHello, 0);
}

setTimeout(printHello1, 0);

blockForSomeTime();

setTimeout(printHello2, 0);

console.log('Me first');
console.log('Me Second');

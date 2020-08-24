// block scope vs function scope

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints 5 , five times because by the time this lines gets executed . i is already incremented to 5 and closure latches on
}

//block scope

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints as expected coz 'let' creates new variable each time.
}

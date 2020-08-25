// block scope vs function scope

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints 5 , five times because by the time this lines gets executed . i is already incremented to 5 and closure latches on
}

//block scope

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints as expected coz 'let' creates new variable each time.
}

//------------------------------------------------------------------------------//

// immutability

const user = {
  firstName: 'sangeeth',
  lastName: 'sivan',
  alias: 'berzerk'
};

const changeName = (obj) => {
  obj.firstName = 'guts';
  obj.lastName = 'keyonashi';
  return obj;
};

console.log(changeName(user)); // { firstName: 'guts', lastName: 'keyonashi', alias: 'berzerk' }

console.log(user); // { firstName: 'guts', lastName: 'keyonashi', alias: 'berzerk' }

const user1 = {
  firstName: 'sangeeth',
  lastName: 'sivan',
  alias: 'berzerk'
};

const immutatbleChangeName = (obj) => {
  // const copy = {...obj}
  // copy.firstName = 'guts'
  // copy.lastName = 'keyonashi';
  return {
    ...obj,
    firstName: 'guts',
    lastName: 'keyonashi'
  };
};

console.log(immutatbleChangeName(user1)); // { firstName: 'guts', lastName: 'keyonashi', alias: 'berzerk' }
console.log(user1); // { firstName: 'sangeeth', lastName: 'sivan', alias: 'berzerk' }

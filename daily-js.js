// block scope vs function scope

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints 5 , five times because by the time this lines gets executed . i is already incremented to 5 and closure latches on
}

//block scope

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i)); // prints as expected coz 'let' creates new variable each time.
}

//------------------------------------------------------------------------------//

// immutability - js pass variables by reference , so when you make changes it also makes changes to the original object.  So to achieve immutability always clone your objs
// or arrays. And make changes to the copy obj and return it, to easily clone obj or arr use rest or spread operator.

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

console.log(user); // { firstName: 'guts', lastName: 'keyonashi', alias: 'berzerk' } //original obj got changed

const user1 = {
  firstName: 'sangeeth',
  lastName: 'sivan',
  alias: 'berzerk'
};

const immutatbleChangeName = (obj) => {
  //can also do {...obj} in params
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
console.log(user1); // { firstName: 'sangeeth', lastName: 'sivan', alias: 'berzerk' } // original object is untouched

//shallow copy vs deep copy

const obj = { names: { myname: 'sangeeth' } };

const shallowCopyObj = { ...obj };

shallowCopyObj.names.myname = 'Sivan';

console.log(obj);
console.log(shallowCopyObj);

const obj1 = { names: { myname: 'sangeeth' } };

const deepCopyObj = JSON.parse(JSON.stringify(obj1));

deepCopyObj.names.myname = 'Sivan';

console.log(obj1);
console.log(deepCopyObj);

// TODO: ALot more.

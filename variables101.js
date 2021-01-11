// Scoping - Variables created with var keyword has function scope (only lives inside that function). Variables created without var keyword are members to the global object.

function varScope() {
  glob = 10;
  var loca = 20;
  console.log("variables created");
}

varScope(); // Execute the function to actually create those variables or use IIFE
console.log(glob); // 10
// console.log(loca); // ERROR: Loca is not defined

/* Example 1 : Scope using var.*/

const discountedPrices = (prices, discount) => {
  const clonePrices = prices;
  var discounted = [];
  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }
  /* These vars can be accessed outside the for block {} because var's are function scoped
		 To declare block scoped variables we must use let and const , lets look at it in the next
		 example.
	*/
  console.log(i); // 3
  console.log(discountedPrice); // 150
  console.log(finalPrice); //150

  return discounted;
};

console.log(discountedPrices([100, 200, 300], 0.5)); //[50,100,150]

/* End of Example1 */

/* Example 2 : Scope using let .*/

const discountedPricesBlockScoped = (prices, discount) => {
  const clonePrices = prices;
  let discounted = [];
  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount);
    let finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  /* Here we get ReferenceError because let is block scoped {} so these varaibled only lives within the for loops block {} */

  /*
  console.log(i); // i is not defined
  console.log(discountedPrice); // discountedPrice is not defined
	console.log(finalPrice); // finalPrice is not defined
	*/

  return discounted;
};

console.log(discountedPricesBlockScoped([100, 200, 300], 0.5)); //[50,100,150]

/* End of Example2 */

/* HOISTING - When the javascript interpreter evaluates your code it will move all variable declarations and function declarations to the top of the current scope.*/

console.log(hoisted); // undefined.
var hoisted;

/* gets interpreted as
   var hoisted;
	 console.log(hoisted);
*/

console.log(fnHoisted()); // HOISTED !
function fnHoisted() {
  return "HOISTED !";
}

/* For block scoped variable like let it still gets hoisted but when we try to refernece it before the varaible gets declared we get ReferenceError*/

console.log(blockHoisted); // Cannot access "blockHoisted" before initialization
let blockHoisted;

/* still gets interpreted as
   let blockHoisted;
	 console.log(blockHoisted);
*/

console.log(constablock); // same error
const constablock = 10; // const variables should always be initialized

console.log(constFnDec()); //same error
const constFnDec = () => {

}

/* const vs let : Unlike let , once you have assigned a value to const you can't reassign it to a new value */

let name = 'Sangeeth';
const handle = 'berzerk36'

name = 'Sangeeth Sivan';
handle = 'newBerz'; // Error : Assignment to constant varibale.

/* Example 3 - using objects in const*/
const person = {
	name: 'Sangeeth';
}

// What i can do
person.name = 'Sangeeth sivan'; // Because in here i am only changing the property of the const object and not the value of the const variable itself.
console.log(person.name); //Sangeeth Sivan

// What i can't do
person = {}; // Error : Assignment to constant varibale.

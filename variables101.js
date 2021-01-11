// Scoping - Variables created with var keyword has function scope (only lives inside that function). Variables created without var keyword are members to the global object.

function varScope() {
  glob = 10;
  var loca = 20;
  console.log('variables created');
}

varScope(); // Execute the function to actually create those variables or use IIFE
console.log(glob); // 10
// console.log(loca); // ERROR: Loca is not defined

/* Example : Scope using var.*/

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

/* End of Example */

/* HOISTING - When the javascript interpreter evaluates your code it will move all variable declarations and function declarations to the top of the current scope.*/

console.log(hoisted); // undefined.
var hoisted;

console.log(fnHoisted()); // HOISTED !
function fnHoisted() {
  return 'HOISTED !';
}

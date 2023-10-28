// -------------------------------------
// 1. Carrying in js -- currying is a way of breaking down a function with multiple arguments
//  into smaller functions with one argument each. This can be useful for making functions more
//  reusable and avoiding passing the same arguments multiple times.
// -------------------------------------

// function multiply(a, b){
//     console.log(a * b);
// }
// add(2,4); // normal call a function

// -------------------------------------------------------------
// 2. curring using bind methods
// -------------------------------------------------------------
// function multiply(a, b){
//     console.log(a * b);
// }

// let multiplyByTwo = multiply.bind(this, 2); // fix the a agrgument with 2
// multiplyByTwo(5);
// multiplyByTwo(7);

// let multiplyByThree = multiply.bind(this, 3); // fix a with 3
// multiplyByThree(5);

// -------------------------------------------------------------------
// 3. curring by using closure
// -------------------------------------------------------------------
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
multiply(2)(5); //10
let multiplyByThree = multiply(3);
multiplyByThree(5); //15

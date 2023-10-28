// 1-----------------Normal Function ----------------------
//function definition
// function nameOfTheFunction(param1, param2) {
//do something
// }
//function invocation / function call
// nameOfTheFunction(arg1, arg2);

// -----------------------------------------------------------------------
// impure function --> jab fuction ke argument ki value same ho but result
// differnt deffent ho(ya jb koi function external fector pe depend krta ho) to use
//  inpure function kahte hai.
// -----------------------------------------------------------------------
const a = 9;

function Sum(b) {
  console.log(a + b);
}

Sum(2); // 11 --> when a is 9;
Sum(2); // 15 --> when a is 13

// pure function -->
function add(a, b) {
  // console.log(a+b); //side effect -->
  return a + b;
}
const ans = add(5, 3);
console.log(ans);

// --------------------------------------------------------
//write a function to add 2 numbers
// --------------------------------------------------------
function add(num1, num2) {
  var ans = num1 + num2;
  console.log(ans);
  return ans;
}
let res = add(3, 4);
console.log(res);

// --------------------------------------------------------
//functions are treated as first class citizens in JS
// -> functions can be returned
// -> functions can be passed as parameters/args
// --------------------------------------------------------

// build a calculator
function calculator(operator, num1, num2) {
  if (operator == "add") {
    return function add() {
      // console.log(num1+num2);
      return num1 + num2;
    };
  } else if (operator == "-") {
    return function sub() {
      console.log(num1 - num2);
    };
  }
}

let retFn = calculator("add", 45, 46);
console.log(retFn); //print function retFn
let sumOfTwoNum = retFn(); // function call
console.log(sumOfTwoNum); // 91

// 2) -------------function expression---------------------------------
//  ----Syntex---------
// var variable_name = function (params) {
//do something
// }
// variable_name();
// Below ex-
var sayHi = function () {
  console.log("hello how r u ?");
};
sayHi();
console.log(sayHi);

// 3)--------------- IIFE -> immediately invoked function-----------------
// IIFE function inclose with the ()

let additionIIFE = (function (a, b) {
  // console.log(a + b);
  return a + b;
})(20, 30);
console.log(additionIIFE);

// 4)--------Arrow Function----------------------------

// a.
var arr = (a, b) => {
  let c = a + b;
  console.log(c);
};

arr(10, 40); // 50

// b.
var arr = (a, b) => {
  let c = a + b;
  return c;
};
res = arr(10, 40);
console.log(res);

// c. If statement only in one line do not use {....}
var arr = (squ) => squ * squ;
res = arr(20);
console.log(res);

// Recursive function

function fact(n) {
  if (n == 0 || n == 1) return n;

  return n * fact(n - 1);
}

console.log(fact(5));

// variable declaration
let a;

// varibale initialisation
a = 10;

//variable reinitialisation
a = 20;

//print
console.log(a);

// Undefined and not defined
let un;
console.log(un); //undefined
//console.log(undeclare); // not defined

// -----------------------------------------
// 2. Datatype
// ----------------------------------------
// Primitive data types in javascript

// 1) undefined
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined
console.log(typeof undeclared); //undefined

// 2) null
let obj = null;
console.log(obj); //null
console.log(null == undefined); // true

// 3) number

let num = 100;
let price = 12.5;
let discount = 0.05;
console.log(num);
console.log(discount);
console.log(Number.MIN_VALUE);
console.log(-Infinity); // same as MIN_VALUE
console.log(Infinity); // Same as MAX_VALUE
console.log(Number.MAX_VALUE);
// NaN -- Not a Number this indicate invalid number
console.log("a" / 2); //NaN bcz string not devided by number
console.log(NaN / NaN); // NaN
console.log(NaN == NaN); // false --> The NaN does not equal any value, including itself.

// numeric separator(_) --> allows you to create a visual separation between groups of digits by using underscores (_) as separators.
// it also increase readability
const budget = 10000000000;
const numericSeparator = 10_000_000_000; // incerase readibility
console.log(numericSeparator); //10000000000

// 4.) string -- "" , '' , ``  backtricks -> use for access variable value in js
let greeting = "Hi";
let message = "Bye";
//Both are diffrent str, bcz in js string are immutable, both str take diffrent palce in stack to store the data.
let str = "JavaScript";
str = str + " String";
console.log(str); // JavaScript String
// length of string
console.log(str.length);
// Accessing the character
let s = "JavaScript";
console.log(s[0]); // J
s[0] = "j"; // access and change the character
console.log(s); //JavaScript , Not javascript

//5. Boolean Type -- return true and false
let inProcess = true;
let complete = false;
console.log(typeof complete);

b = 30;
console.log(typeof b); // number

b = "hello";
console.log(typeof b); //string

b = true;
console.log(typeof b); //boolean

b = null;
console.log(typeof b); //object

console.log(typeof b); //undefined

// we can conver other types of variable into boolean true or false with the help of Boolean method Boolean().
console.log(Boolean("Hi")); //true
console.log(Boolean(" ")); //false
console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); //false
console.log(Boolean(0)); // true
console.log(NaN); //false
console.log(Boolean({ foo: 100 })); // true if object is non empty
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

let error = "An error occurred";

if (error) {
  console.log(error); // An error occurred
}

// 6) symbol -- JavaScript added a primitive type in ES6: the symbol. Different from
// other primitive types, the symbol type does not have a literal form.

// to create a symbole we call the Symbol();
let s1 = Symbol();
console.log(Symbol() == Symbol()); // false, bcz Symbol function create unique value each time

// 7) bigint type -- > The bigint type represent the whole number that are greater than 2^53 - 1. For bigint number we need to add (n) in last of number

let pageView = 90007155221522452n;
console.log(typeof pageView);
console.log(pageView);

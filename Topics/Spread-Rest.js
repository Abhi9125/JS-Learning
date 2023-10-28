// --1. Cloning object with spread operator
const person1 = {
  name: "adam",
  age: 25,
};

// --New refrence created for person2 deep copy
const person2 = { ...person1 };
person2.name = "Tom Crush";
person2.age = 35;
console.log("person 1 age = " + person1.age); // 25
console.log("person 2 age = " + person2.age); //35

// --2. Cloning array with spread operator
const arr1 = [4, 5, 6, 7, 8];
console.log(...arr1); // 4 5 6 7 8 , print sperate value.
const arr2 = [...arr1]; // new refrence create for arr2 deep copy

console.log("before edit = " + arr1[1]); //5
console.log("before edit = " + arr2[1]); //5

arr2[1] = 400;
console.log("after edit = " + arr1[1]); //5
console.log("after edit = " + arr2[1]); //400

//-- 3. spread operator as a argument

const max = Math.max(...arr2);
console.log("Maximum in arr2 = " + max); //400

//-- 4. use spread operator to adding to array or object
const person3 = { ...person1, ...person2 };
console.log(person3);

const arr3 = [...arr1, ...arr2];
console.log(arr3); //

//   -- Rest operator --  use for rest the arguments in a single value in function, we use rest operator if argumetn are diffrent type like string, number etc.

// -- Before rest operator

function sum() {
  let sum = 0;

  // -- arguments given by js that store the parameter in object form
  for (let i in arguments) {
    console.log(arguments); //print object argument with 10,20
    console.log(typeof arguments); // object

    for (let i in arguments) {
      sum += arguments[i];
    }
  }
  console.log(sum); // 60
}

// sum(10, 20);
sum(10, 20, 30); // 180

// -- if we pass sum("abhi", 10 , 20 , 30) so we not perform that operation so that reasion we rest operator
//-- we always use rest parameter in last, don not use like this(...args, a ,b)
function sum1(a, ...args) {
  console.log(arguments); //print all argument that pass in function calling time
  console.log(args); // [10, 20,30]
  console.log(Array.isArray(args)); // true

  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum1("abhi", 10, 20, 30));

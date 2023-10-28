//declaring an arr
var cars = [];

//declaring+initializing arr
var cars = ["BMW", "AUDI", "HONDA", 1, 2, 4, true, undefined];
//printing an array
console.log(cars);

//aceesing elements in an array
console.log(cars[3]);
console.log(cars[0]);

//replacing elements
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in arr
cars[8] = "Maruti";
console.log(cars);

// interview Q
cars[23] = "hello";
console.log(cars.length);
console.log(cars);

//Methods
// pop() -- remove element from last
cars.pop();
console.log(cars);
console.log(cars.length);

// push() -- add element from last of array
cars.push("Mustang");

// unshift-> add element at the starting of arr
cars.unshift("TATA");
console.log(cars);
console.log(cars[0]);

// shift-> it removes element from start of an arr

cars.shift();
// console.log(cars);
console.log(cars);

cars.length = 3;
console.log(cars);

// at -> use to get element at last
let name = ["abhi", "akhand", "satyam", "sandi"];
console.log(name.at(-1));

// Array.isArray() -- use for checking a variable is array or not if it is a variable return true otherwise false.
const rating = [1, 2, 3, 4, 5];
const vote = { user: "abhi", age: 30 };
const str = "It is not an array";

console.log(Array.isArray([])); // true
console.log(Array.isArray(rating)); //true
console.log(Array.isArray(vote)); //false
console.log(Array.isArray(str)); // false

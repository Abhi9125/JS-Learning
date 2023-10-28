// what is prototype in js -- It is a object that is attech with the methods, object, array whatever
// we create in javascript, it give some predefine methods or propertise with the help of (.) oprator
const arr = [1, 2, 3, 4, 5];

console.log(arr);

let obj = {
  name: "Akshay",
  city: "Lucknow",
  getintro: function () {
    console.log(this.name + " from " + this.city);
  },
};

//  arr.__proto__ == Array.prototype == find all the methods of array

// arr.__proto__.__proto__ == Object.prototype == give all the methods of object

// arr.__proto__.__proto__.__proto__ == Object.prototype.prototype == null

let obj2 = {
  name: "Aditya",
};

// Never do this, this no currect way to update the prototype
obj2.__proto__ = obj;

console.log(obj2.name);
console.log(obj2.city);

// by the help of prototype hm apn khud ka koi method define kr skte hai
// like ex
Function.prototype.mybind = function () {
  console.log(mybind);
};

function fun1() {}

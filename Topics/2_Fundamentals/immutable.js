// non-primitive variable are mutable
// mutable

const person1 = {
  name: "adam",
  age: 25,
};

// const person2 = person1; // Shadow copy

// console.log("before name edit "+person1.name); //adam
// console.log("before name  edit "+person2.name); //adam

// person2.name = 'Tom Crush'; // change happen both refrence

// console.log("After name edit "+person1.name); //tom crush
// console.log("After name edit "+person2.name); //tom crush

// to avoid the shadow copy or refrence copy

const person2 = Object.assign({}, person1); // new refrence create for person2
// same thing also do with spred opreater
// const person2 = {...person1};

console.log("person1 name " + person1.name); // adam
console.log("person2 name " + person2.name); // adam

person2.name = "Tom crush";
console.log("person1 name " + person1.name); // adam
console.log("person2 name " + person2.name); // Tom crush

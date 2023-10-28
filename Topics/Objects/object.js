//1.-------------------- empty object----------------------------
// var obj = {};
// console.log(obj);

// //2.------------------Declare an objects ------------------------------------
// An object can be created with figure brackets {…} with an optional list of properties.
//  A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
var person = {
  name: "Abhishek",
  age: 23, // 23--> is integer but "23",'23',`23`--> is string
  phone: 9999999,
  ismale: true,
  "School Name": "St. Xavier school",
};

console.log(person); // person object

//3.------------------dot Notation --> use to get key and value in object---------------------------------
console.log(person.name);
console.log(person.age);

//4.-----------------Square bracket --> also use to get key and value --------------------------------
console.log(person["phone"]); //9999999
console.log(person["School Name"]); // jb bhi space ho to [] ka use krte hai object ke key ko acess krne ke liye.

//5.----------------nesting of objects---------------------------------------------
var captainAmerica = {
  firstname: "Steve",
  Lastname: "Rogers",
  friends: ["Bucky", "Tony Stark", "Bruce Barner"],
  isAvenger: true,
  address: {
    state: "Manhatain",
    city: "New York",
    country: "USA",
  },
  sayhi: function () {
    console.log(`hello my name is ${captainAmerica.firstname}`);
  },
};

console.log(captainAmerica); // hole object print
console.log(captainAmerica.friends); // ["Bucky", "Tony Stark", "Bruce Barner"]
console.log(captainAmerica.friends[1]); // Tony Stack
console.log(captainAmerica["friends"][0]); // Bucky

// ------------------------nested object accesing ---------------------------
// console.log(captainAmerica.address.state);
// console.log(captainAmerica["address"]["city"]);

//6.---------------------- Travesing in object --------------------------------
// for in loop   -- > gives key
for (let key in captainAmerica) {
  console.log(key); // only key print  output == fristname,Lastname, friend,...
  console.log(captainAmerica[key]); // print value of the key
}

//7.-------------------------deleting a key from an object --------------------------
//     delete captainAmerica.age;
//     console.log(captainAmerica);

//8.-----------------------------Adding a key in object -----------------------------------------
// captainAmerica.height = "180";
// console.log(captainAmerica);

//9.---------------------------------Difference b/w (.) DOT and [] square notation -----------------------------
var user = {
  name: "Sandeep",
  age: 30,
};
let abc = "age";
console.log(user.name); // Sandeep
console.log(user.abc); // output --> undefined
console.log(user["age"]); // 30
console.log(user[abc]); // 30
console.log(user["abc"]); // output --> undefined

// If we defjine a variable and give it a value to it, and we use [] for key  inside the object it will take that variable value, look at the below example.
// let fruit = prompt("Which fruit to buy?"); // value substitute
// let bag = {
//     [fruit] : 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.fruit);// output --> undefined
// console.log(bag[fruit]);  // output --> 5
// console.log(bag["fruit"]); // output --> undefined
// Square brackets are much more powerful than dot notation.
// They allow any property names and variables.
// But they are also more cumbersome to write.

let fruitName = "apple";
//expression evaluate like string me jaise hoti h ${1+1}
let items = {
  [fruitName + "computers"]: 4,
};
console.log(items); //applecomputers : 4

//10.-----------------------------property vakue shorthand use for when key and value both are same -----------------
// var computerbrand = "apple";
// var processor = "M2 sillion";
// var ram = "16GB";

// var specification ={
//     computerbrand : computerbrand, // computerbrand :"apple"
//     processor : processor,
//     ram : ram
// };
// console.log(specification.computerbrand);
// console.log(specification["processor"]);

// // Instead of name:name we can just write name, like this:
// var specification ={
//     computerbrand, // computerbrand :"apple"
//     processor,
//     ram
// };
// console.log(specification.computerbrand);

//11.-------------- Property names limitations---------------

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

// these properties are all right
var obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6

// // In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
// // Other types are automatically converted to strings.
// // For instance, a number 0 becomes a string "0" when used as a property key:

// var obj = {
//   0: "test" // same as "0": "test"
// };
// // both alerts access the same property (the number 0 is converted to string "0")
// console.log( obj["0"] ); // test
// console.log( obj[0] ); // test (same property)

//12.-------------------Ordered like an object----------------
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
var codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};
console.log(codes); // 1,41,44,49
for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

var person = {
  name: "Abhishek",
  age: 23,
  phone: 9999999,
  ismale: true,
  "School Name": "St. Xavier school",
};

console.log(person); // same as jaise object me input hai
for (let key in person) {
  console.log(key);
}

//14.---------------------------------Summary-----------------------------

// Objects are associative arrays with several special features.
// They store properties (key-value pairs), where:
// Property keys must be strings or symbols (usually strings).
// Values can be of any type.
// To access a property, we can use:
// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// Additional operators:
// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.

// ------------------------29/06/2022---------------------------------------

//15.--------------------Object references and copying/or read artical-------------------------

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Let’s start with a primitive, such as a string.
// Here we put a copy of message into phrase:

// let message = "Hello!";
// let phrase = message;
//As a result we have two independent variables, each one storing the string "Hello!"

// Objects are not like that.
// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// Let’s look at an example of such a variable:
// let user = {
//   name: "John"
// };
// And here’s how it’s actually stored in memory:
//The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.
// We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
// When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and
// performs the operation on the actual object.

// ---------------------------object cloning-------------------------------
// var obj = {
//     name : "abhi",
//     age : 30,
// }

// var clone={};
// // jiske andar copy karna h, jaha se copy karna hai
// Object.assign(clone,obj,{ismale: true},{favoritefood : "pizza"});
// console.log(clone);
// obj.name = "pete";
// console.log(obj.name);  //pate
// console.log(clone.name); //abhi

// ----------------------------nested object cloning----------------------
let user1 = {
  name: "pate",
  size: {
    height: 182,
    width: 50,
  },
};

var clone = {};
Object.assign(clone, user1);
user1.size.height = 100;
console.log(user1); //
console.log(clone); //height ko 182 hi hona chahiye tha but 100 ho gya bcz both clone and user1 point the same object(refernce)size

//---------------------------------------------------------------------
// When a function declare inside the object is know as methods
//---------------------------------------------------------------------
let obj2 = {
  name: "abhi",
  last: "singh",

  detail: function () {
    console.log(`My name is ${this.name} ${this.last} `);
  },
};

obj2.detail();

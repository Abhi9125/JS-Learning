// -- Array Destructuring means assigning array indexl value to seprate variable

let arr = ["abhi", 10, 40, , , 200];

let [name1, a, b, c, d = 100, e] = arr;
console.log(name1); //name
console.log(a); //10
console.log(b); // 20
console.log(c); //undefined , if value is not present
console.log(d); //100 we can set a defalt value in it
console.log(e); // 200

//-- Assign value inn rest operator
let [name2, ...args] = arr;
console.log(name1); // abhi
console.log(args); //  [10, 20, 30, 40]

// -- Array Destructuring in function
function desct() {
  return [10, 20, 30];
}

let [a1, b1, c1] = desct();
console.log(a1); //10
console.log(b1); // 20
console.log(c1); //30

// -- Object destructuring same as array destructuring, the only diffrent is in
// -- object destructing varibale name same as key name that ar in object. below ex--

let obj = {
  Fname: "rahul",
  Lname: "Anand",
  age: "25",
};

let { Fname, Lname, age, address } = obj;

console.log(Fname); //rahul
console.log(Lname); //Anand
console.log(age); //25
console.log(address);

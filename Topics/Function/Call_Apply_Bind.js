//1. Call, apply and bind use for use a function in diffrent object---------------------
// call Syntax --  functionName.call(thisArg, arg1, arg2, ...);

let obj1 = {
  firstname: "Akshay",
  lastname: " Saini",
  printfullname: function () {
    console.log(`My name ${this.firstname} ${this.lastname}`);
  },
};
// normal calling a function from a object
obj1.printfullname(); //My name Akshay  Saini

let obj2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",

  // this is not a good approach to write same function different object.
  // printfullname: function () {
  //   console.log(`My name ${this.firstname}+ " "+ ${this.lastname}`);
  // },
};

// --------------------------------------------------------------------------------------------
// 2. Function borrowing -- In function borrowing hm eek object ke function ko kisi dusre object ke
// function ke liye borrow kr lete hai
// --------------------------------------------------------------------------------------------
obj1.printfullname.call(obj2); //My name Sachin Tendulkar

// -----------------------------------------------------------------------------------------------
// 3. Hm printfullname ko as a global function bhi define kr skte the ar fir use diffrent - 2
//object ke liye use kr skte hai.
// ------------------------------------------------------------------------------------------------
// let printfullname = function () {
//   console.log(`My name ${this.firstname} ${this.lastname}`);
// };
// printfullname.call(obj1); //My name Akshay  Saini
// printfullname.call(obj2); //My name Sachin Tendulkar

var greeting = "Hi";
var message = {
  greeting: "Hello",
};

function say(name) {
  console.log(this.greeting + " " + name);
}

say.call(this, "John"); // "Hi John"
// ------------------------------------------------------------------------------------------------
// 4. function with parameter
// ------------------------------------------------------------------------------------------------
let printfullname = function (city, state) {
  console.log(`My name ${this.firstname} ${this.lastname} ${city} ${state}`);
};
// printfullname.call(obj1, "Lucknow", "UP"); //My name Akshay  Saini Lucknow UP
// printfullname.call(obj2, "Mumbai", "Maharastra"); // My name Sachin Tendulkar Mumbai Maharastra

// -------------------------------------------------------------------------------------------------
// 5. apply method -- in apply method hm argument ko [] array me send krte hai bs itna hi
// difference hai call and apply me.
// -------------------------------------------------------------------------------------------------
printfullname.apply(obj1, ["Lucknow", "UP"]); //My name Akshay  Saini Lucknow UP
printfullname.apply(obj2, ["Mumbai", "Maharastra"]); // My name Sachin Tendulkar Mumbai Maharastra

// -------------------------------------------------------------------------------------------------
// 6. bind method -- bind method function ko bind kr deta hai kisi object se ar eek function return deta hai
// -------------------------------------------------------------------------------------------------
// let showdetailofbind = printfullname.bind(obj1);
// showdetailofbind(); // My name Akshay  Saini undefined undefined

// let showdetailofbind = printfullname.bind(obj1, "Lucknow", "UP");
// showdetailofbind();

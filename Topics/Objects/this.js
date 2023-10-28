// In non–strict mode, this is always a reference to
// an object. In strict mode, it can be any value.
// For more information on how the value is determined, see
// the description below.

// 1. Non - Strict mode------------------------------

// a = 4;
// console.log(a); //  with out declare console a

// 2. Strict mode--------------------------------------
// To invoke strict mode for an entire script, put the exact statement "use strict";
// (or 'use strict';) before any other statements.

// "use strict";
//b = 3; // give error so slove this error defince b with let,const, or var
// let b = 5;

// console.log(b);

// 3. this behaviour in non - strict mode in node js ----------------------------

//a. if this console as a global.
// console.log(this);  // {} -- empty object

// b. if console this in function
// function viewthis(){
//     console.log(this);  // this pointing global object
// }

// viewthis();

// c. if console this in a object
// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function(){
//         console.log(this);  // this pointing obj object
//     }
// };

// obj.f();

// d. if this console with in object and with a function

// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function (){
//         function g(){
//             console.log(this); // this point global object
//         }
//         g();
//     }
// }

// obj.f();

// 4.  this behaviour in strict mode in node js -----------------------------

// "use strict";
//a. if this console as a global.
// console.log(this);  // {} -- empty object

// b. if console this in function
// function viewthis(){
//     console.log(this);  // this pointing undefined
// }

// viewthis();

// c. if console this in a object
// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function(){
//         console.log(this);  // this pointing obj object
//     },
// };

// obj.f();

// d. if this console with in object and with a function

// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function (){
//         function g(){
//             console.log(this); // this point undefined.
//         }
//         g();
//     }
// }

// obj.f();

// 5. this behaviour in non strict mode in broswer --------------------------------

//a. if this console as a global.
// console.log(this);  // {} -- this pointing window object

// b. if console this in function
// function viewthis(){
//     console.log(this);  // this pointing window object
// }

// viewthis();

// c. if console this in a object
// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function(){
//         console.log(this);  // this pointing obj object
//     },
// };

// obj.f();

// d. if this console with in object and with a function

// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function (){
//         function g(){
//             console.log(this); // this pointing window object.
//         }
//         g();
//     }
// }

// obj.f();

// 6. this behaviour in strict mode in broswer-------------------------------
"use strict";
//a. if this console as a global.
//console.log(this);  // {} -- this pointing window object

// b. if console this in function
// function viewthis(){
//     console.log(this);  // this pointing undefined
// }

// viewthis();

// c. if console this in a object
// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function(){
//         console.log(this);  // this pointing obj object
//     },
// };

// obj.f();

// d. if this console with in object and with a function

// let obj = {
//     a : "abhi",
//     b : "singh",
//     f : function (){
//         function g(){
//             console.log(this); // this pointing undefine.
//         }
//         g();
//     }
// }

// obj.f();

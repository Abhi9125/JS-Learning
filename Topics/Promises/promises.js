// ----------------------------------------------------------------------------------
// Promises
// ----------------------------------------------------------------------------------

// -------------------------------------------
// 1. Callback Hell -- > when multiple call depend on eachother is know as callback hell
// -------------------------------------------

// const cards1 = ["Shoes", "Sweater", "Hoods"];

// two step to place a order
// 1. createOrder
// 2. proceedPayment
// normal call

// api.createOrder();
// api.proceedPayment();
// api.confirmPayment();

// assuming above each one depend on each other like when order is creaded then proceespayment call
// and when proceedPayment donethen comfirmPayment call

// api.createOrder(cards1, function () {
//   api.proceedPayment(function () {
//     api.confirmPayment(function () {
//       api.orderSummary(); //callbackhell
//     });
//   });
// });

// ----------------------------------------------
// 2. Inversion of control -- We lose the control of our code when we use calling a function by callback
// ----------------------------------------------

// api.createOrder(cards1, function () {
//   api.proceedPayment();
// });

// -------------------------------------------
/* Episode - 2 Promises */
// -------------------------------------------
// Before promise thing are work like above code, in that code the major problem with inversion control
// for solving inversion control js introduce the concept of promises.

// const cards2 = ["shoes", "pants", "kurta"];

// blow two function asynchronous and depend on each other

// api.createOrder(function () {
//   api.proceedPayment();
// });

// with callback(before promises)
// below code, it is resposibility of createOrder function to first create the order and then proceed for payment and call callback function proceedPayment

// api.createOrder(function () {
//   api.proceedPayment();
// });

// in the above code the problem is inversion of control

// to fix this problem js introduce the promise conpect, promise thing but it is a empty object with some data object.
// now createOreder function return a promise that is store in a variabe watch below code.

// const cards3 = ["shoes", "pants", "kurta"];

// const promiseRef = createOrder(cards3);

// promiseRef access by '.then()'
// inisialy orderId is undefined and pending state bcz createOrder is a async function that take time to exicute
// inisialy it will be undefined so below code won't trigger
// after some time,when execution has finished and promiseRef has the data then automatically the below code will trigged.

// promiseRef.then(function () {
//   proceedPayment(orderId);
// });

// Earlier we talked about promises are object with empty data but it is not true
// below example

// const URL = "https://github.com/Abhi9125/Mern_by_abhi/tree/main/JavaScript";
// const user = fetch(URL);
// console.log(user);
/*prototype : promise
promisstate: rejected
promiseresult : error*/
// user.then(function (data) {
//   console.log(data);
// });

//
// promise return three state --
// i. pending state -- Nither fulfill or rejected
//ii. fulfill state -- fullfill
//iii. rejectected state -- rejected
// promises are immutable

// promise also resolve a problem that is callbackhell
// callback Hel example

// createOrder(cards1, function () {
//   proceedPayment(function () {
//     confirmPayment(function () {
//       orderSummary(); //callbackhell
//     });
//   });
// });

// with the help of promises we resole callback hell problem
// This is promises chaining
// always return promises in promises chain

// createOrder(cards1)
//   .then(function () {
//     return proceesPayment(OrderId);
//   })
//   .then(function () {
//     return confirmPayment(PaymentStaus);
//   })
//   .then(function () {
//     return UpdateWallet(balance);
//   });

// ----------------------------------------episode 3--------------------------

// How to create our own promise --> To create our own promise js provide a promise constructer that have a callback function and it take two parameter resove and reject. `resolve` and `reject` also a function that is internaly define by js

// const cards4 = ["shoes", "pants", "kurta"];

// // Consumer part of promises
// const promise = createOrder(cards4);
// // our expectation that above function return me a promise

// console.log(promise); // inisialy it print undefined

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     // proceedToPayment(orderId);
//   })
//   // if promise give error so it will handle by `.catch()`
//   .catch(function (err) {
//     console.log(err);
//   });

// // production part of promise/ creatin gthe promise
// function createOrder(cards4) {
//   const promise = new Promise(function (resolve, reject) {
//     // `resolve`,`reject` are functio which is passes by JS to us in rder to handle success and failure of function call.

//     // let take a real world example
//     // We want to create a order online store
//     // Mock logic steps
//     // 1. validateCard
//     // 2. Insert in DB and get an orderID
//     if (!validateCard(cards4)) {
//       // if card is not valid
//       const err = new Error("cart is not valid");
//       reject(err);
//     } else {
//       const orderId = "12345"; //we got this id by calling to db (Assumption)
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return promise; // if the promise return true so above promise will resolve
// }

// function validateCard(cards4) {
//   return true; // assume
// }

// -------------------------------------------------------------------------------------
// promise chaining--
// Promise Chaining -- in promise chaining whatever return from the frist `.then` funcdatation it become
// become data for the next `.then ` function and so on...
// at any point of promise chaining, if promise is rejected the execution will fallback to `.catch` and others promise would not run.
// ------------------------------------------------------------------------------------

// const carts5 = ["shoes", "pants", "kurta"];

// Consumer part of promises
// createOrder(cards4)
//   .then(function (orderId) {
//     // success aka resolve promise handling
//     // we have return data or promise so that we can keep chaining the promises, here we return data
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     // promise chaining
//     // now we will make sure that `proceedToPayment` return a promise too
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
/*
By placing `.catch` block at some level after which we are not concerned with failure.
there could be multiple `.catch` too below ex-
  createOrder(cards4)
  .then(function (orderId) {
    // success aka resolve promise handling
    // we have return data or promise so that we can keep chaining the promises, here we return data
    console.log(orderId);
    return orderId;
  })
  .catch(functionn(err){
    console.log(err);
  })
  .then(function (orderId) {
    // promise chaining
    // now we will make sure that `proceedToPayment` return a promise too
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

// production part of promise/ creatin gthe promise
// function createOrder(cards4) {
//   const promise1 = new Promise(function (resolve, reject) {
//     // `resolve`,`reject` are functio which is passes by JS to us in rder to handle success and failure of function call.

//     // let take a real world example
//     // We want to create a order online store
//     // Mock logic steps
//     // 1. validateCard
//     // 2. Insert in DB and get an orderID
//     if (!validateCart(carts4)) {
//       // if card is not valid
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "12345"; //we got this id by calling to db (Assumption)

//     if (orderId) {
//       // Success scenario
//       resolve(orderId);
//     }
//   });
//   return promise1; // if the promise return true so above promise will resolve
// }

// function validateCard(carts5) {
//   return false; // assume
// }

const carts = ["shoes", "pants", "kurta"];
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .catch(function () {
    console.log("Error Got");
  });
// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return false; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    // resolve("Payment Suceesfull");
    reject("Error");
  }); // asume return a promise
}

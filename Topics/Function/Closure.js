// function outer(){
//     var a = 7;
//     function inner(){
//         let b = 20;
//         console.log(a);
//     }
//     inner();
// }

// outer();

//-------------In js we can also return a function------------------
// Q1
// function outer(){
//   var a = 7;

//     function inner() {
//      console.log(a);
//    }

//    return inner;  // function return along with its laxical scope

//  //   we can also write it as below but use only 1

// //  return function inner() {
// //     console.log(a);
// //  }
// }
// var x = outer();
// console.log(x) // print the entire function defination
// x();  //function call ,output -->7

// Q2

// function outer(){
//     var a = 7;
//     function inner() {
//         console.log(a);
//     }
//     a = 100;
//     return inner;
// }
// var x = outer(); // return inner function
// x(); // output --> 100

// Q3
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }

    y();
  }
  x();
}
z(); //--> 7,900

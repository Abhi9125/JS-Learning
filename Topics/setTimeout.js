// ---------setTimeout-------------
// function a(){
//     var b = 1;
//     setTimeout(function () {
//         console.log(b);
//     },3000);
//     console.log("Hello");
// };
// a();

// interview Question
// print number 1 to 5 after a second gap in each number
// function a (){
//     for(let i = 1; i <= 5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         },1000*i);
//     }
// }
// a(); // 1 2 3 4 5

// same Q with var
// function a (){
//     for(var i = 1; i <= 5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         },1000*i);
//     }
// }
// a(); // 6 6 6 6 6

// same Q with var by call
// function a (){
//     for(var i = 1; i <= 5 ; i++){
//         function wrapper(b){
//             setTimeout(function (){
//               console.log(b);
//             },1000);
//         }
//      wrapper(i);
//     }
// }
// a();

// console.log("before");
// setTimeout(function cb (){
//     console.log("timer");
// }, 5000);
// console.log("after");

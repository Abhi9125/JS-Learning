// a function in which we can pass another function as an argument, That function is know as hof

var arr = [2, 5, 7, 12];

//Ques1 -- > calculate the area of a squares where side is arr
//expected o/p ->[4,25,49,144]
// function areaOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++){
//         res.push(arr[i] * arr[i]);
//     }
//     return res;
// }

// var ans = areaOfSquare(arr);
// console.log(ans);

// //Ques2 --> calculate the perimter of a squares where side is arr
// //expected o/p ->[8,20,28,48]

// function perimeterOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i] * 4);
//     }
//     return res;
// }

// var ans = perimeterOfSquare(arr);
// console.log(ans);

// //Ques3 --> calculate the diagonal of a squares where side is arr
// //expected o/p ->[2.88, 7.199999999999999, 10.08, 17.28]

// function diagonalOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       res.push(Math.sqrt(2) * arr[i]);
//     }
//     return res;
// }

// var ans = diagonalOfSquare(arr);
// console.log(ans);

//functional programming --------

//better way
// var arr = [2, 5, 7, 12];
// let area = function (side) {
//   return side * side;
// }

// let perimeter = function (side) {
//   return side * 4;
// }

// let diagonal = function (side) {
//   return Math.sqrt(2) * side;
// };

// let calculate = function (arr, logic) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++){
//     res.push(logic(arr[i]));
//   }
//   return res;
// }

// console.log(calculate(arr, area));
// console.log(calculate(arr, perimeter));
// console.log(calculate(arr, diagonal));

//map
// syntax-> arr.map(function(ele){
// return {logic}
// })
//result arr         //hof     //cb function
// var areaOfSquareArr=arr.map((num) => {
//   return num * num;
// })

var areaOfSquareArr = arr.map(function (num) {
  return num * num;
});
// 1) each element of arr is traversed, it is available in cb function's parameter .
// 2) we peform some action on that element
// 3) on writing return res is pushed inside an array
console.log(areaOfSquareArr);

// //implementation map

// var areaOfSquareArr = arr.map(area);
// // calculate(arr, logic); //-> convert this into map(use this in map way)
// // arr.map(area);

// //this is what we require ye hame krna hai
// // arr.calculate(area);

// Empliment my own calculate method in any array.-------
Array.prototype.calculate = function (logic) {
  //calculate eek polyfill method hai
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
};
let area = function (side) {
  return side * side;
};
let narr = [2, 5, 7, 12]; // this is pointing --> narr.
var ans = narr.calculate(area); // ab hm hof.js ke kisi bhi array .calculate karke calulate ki functionality perform kra skte hai.
console.log(ans);

// Empliment my own push method in any array.-------
Array.prototype.mypush = function (ele) {
  // let length = this.length;
  this[this.length] = ele;
  return this;
};
let puArr = [2, 4, 6, 8]; // this point puArr;
puArr.mypush(7);
console.log(puArr);

// filter-----------------------------------------
var arr = [-5, -4, -3, 5, 6, 7, 1];
// function greterthan -4
function greaterthanaNumber(num) {
  return num > -4;
}
var ans = arr.filter(greaterthanaNumber);
console.log(ans);

// reduce-----------------------------------------
var arr = [2, 5, 7, 12];

function sumOfArr(acc, cur) {
  console.log("Before");
  console.log(acc);
  console.log(cur);
  acc = acc + cur;
  console.log("After");
  console.log(acc);
  return acc;
}

// let ans = arr.reduce(sumOfArr); // in this call acc by defaul arr[0] ki value liga ar curr arr[1] se start ho.
var ans = arr.reduce(sumOfArr, 0); // in this call acc me 0 value liga ar curr arr[0] se start ho
console.log(ans);

// Q
var arr = [18, -5, 566, 28, 56, 12, 456];

function largestValue(acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}

let ans1 = arr.reduce(largestValue);
console.log(ans1);

// Interview Q on map,filter,reduce

const worldCapital = [
  {
    country: "India",
    capital: "Delhi",
    population: "2cr",
  },
  {
    country: "America",
    capital: "Washington DC",
    population: "6cr",
  },
  {
    country: "France",
    capital: "Paris",
    population: "2cr",
  },
  {
    country: "England",
    capital: "London",
    population: "4cr",
  },
  {
    country: "Germany",
    capital: "Berlin",
    population: "2cr",
  },
];

//Q1 print country name and their capital
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin]
function getCountryCapital(obj) {
  return obj.country + "-->" + obj.capital;
}
var res = worldCapital.map(getCountryCapital);
console.log(res);

//Q2-> Return the number of countries with a particular population
//{ 2cr: 3, 4cr: 1, 6cr: 1 }
// use reduce bcz hme ans object e chahiye
function getPerticularPopu(obj, cur) {
  if (obj[cur.population]) {
    // use [] for object
    obj[cur.population] = obj[cur.population] + 1;
  } else {
    obj[cur.population] = 1;
  }
  return obj;
}

var res2 = worldCapital.reduce(getPerticularPopu, {});
console.log(res2);

//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

function getPopulationLessThan5cr(obj) {
  if (obj.population < "5cr") {
    return true;
  }
}
function getCountry(obj) {
  return obj.country;
}
var res = worldCapitals.filter(getPopulationLessThan5cr).map(getCountry);
console.log(res);

//using reduce

function getPopulationLessThan5cr(arr, obj) {
  if (obj.population < "5cr") {
    arr.push(obj.country);
  }
  return arr;
}

var ans = worldCapitals.reduce(getPopulationLessThan5cr, []);
console.log(ans);

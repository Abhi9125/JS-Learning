// Debounce in js
// 1 . Without debouncing data fetch each time when we hit a key including space

// let count = 0;
// const getData = () => {
//   console.log("fetchData..", count++);
// };

// With debouncing we set a time or delay when that time is completed then data will be fetch, if delay is not completed and user start typing then data not fetch
// ex- agr depaly 5ms ka hai to user agr 5 ms ka delay krta hi to hi f=data fetch hoga other wise if user delay only 3or4 so data is not fetch.
// debounce function take two argument 1 is function and second is delay
let count = 0;
const getData = () => {
  console.log("fetchData..", count++);
};

// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData.apply(context, arguments);
//     }, d);
//   };
// };

// we can also write above code like below code
const debounce = function (fn, d) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(this, args);
    }, d);
  };
};

const batterFunction = debounce(getData, 300);

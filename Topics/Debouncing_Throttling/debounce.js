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

// --we can also write above code like below code
const debounce = function (fn, d) {
  let timer;

  return (...args) => {
    // The clearTimeout() function returns undefined
    clearTimeout(timer); // this clearTimeout clear the timer and make it undefined.
    timer = setTimeout(() => {
      //  The apply method is used to invoke the getData function with a specific
      // this context (in this case, the same context as the outer function) and with the args passed as arguments.
      // this point kr rha hai us object ko jis pe event lga hai.
      getData.apply(this, args);
      // we can also directly call the fn function it work same.
      // fn();
    }, d);
  };
};

const batterFunction = debounce(getData, 300);

// -- Another debounce example for button
let counter = 0;
function getApi() {
  console.log(++counter, "Api is calling");
}

const debounce1 = function (fn, delay) {
  let timer1;

  return () => {
    if (timer1) {
      // The clearTimeout() function returns undefined
      clearTimeout(timer1);
    }
    timer1 = setTimeout(() => {
      fn();
    }, delay);
  };
};

document
  .querySelector("#btn")
  .addEventListener("click", debounce1(getApi, 500));

// document.querySelector("#btn").addEventListener("click", getApi);

document
  .querySelector("#input-area")
  .addEventListener("keyup", debounce(getData, 500));

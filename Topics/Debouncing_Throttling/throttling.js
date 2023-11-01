let count = 0;
function getApi() {
  console.log("Api calling...", ++count);
}

// --Throttle function for button
const throttle = (fn, delay) => {
  let flag = false;

  return function () {
    if (!flag) {
      fn();
      flag = false;

      setTimeout(() => (flag = true), delay);
    }
  };
};

document
  .querySelector("#btn")
  .addEventListener("click", throttle(getApi, 1500));

// --throttle function for input

const throttle1 = function (fn, delay1) {
  let flag1 = true;

  return function () {
    if (flag1) {
      fn();
      flag1 = false;
      setTimeout(() => (flag1 = true), delay1);
    }
  };
};
document
  .querySelector("#in")
  .addEventListener("keyup", throttle1(getApi, 5000));

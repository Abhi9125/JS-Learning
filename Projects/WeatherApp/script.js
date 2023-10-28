// http://api.weatherapi.com/v1/current.json?key=6c09b3d1c6da4d95ac702819231510&q=Mumbai&aqi=no

const tempraturefield = document.querySelector(".temp");
const locationfield = document.querySelector(".location_time p");
const dateTimefield = document.querySelector(".location_time spam");
const conditionfield = document.querySelector(".condition p");
const searchfield = document.querySelector(".search_area");
// const form = document.querySelector("form");
const btn = document.querySelector("button");
// console.log(submitbtn);
const target = "Lucknow";

// ----------------------------------
// 3. Add event Listner for search location
// ----------------------------------
const submitbtn = btn.addEventListener("click", searchforlocation);

// ------------------------
// 1. Fetch Api
// ------------------------

const fetchResult = async (targetlocation) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=6c09b3d1c6da4d95ac702819231510&q=${targetlocation}&aqi=no`;

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  //   get all data
  const temp = data.current.temp_c;
  const locationName = data.location.name;
  const date_time = data.location.localtime;
  console.log(date_time);

  const condition = data.current.condition.text;

  updatedetails(temp, locationName, date_time, condition);
};

// -------------------------------------
// 2. Search the location by getting in input box
// -------------------------------------

function searchforlocation(e) {
  e.preventDefault();

  // we can redecalre const in diffrent scope.
  const target = searchfield.value;

  fetchResult(target);
}
fetchResult(target);

// -------------------------------
// 3. Update the value
// ------------------------------
function updatedetails(temp, locationName, date_time, condition) {
  const splitdate = date_time.split(" ")[0];
  const splittime = date_time.split(" ")[1];

  // add day use a method the date method -- The getDay() Method
  // The new Date(getDay()) method returns the weekday of a date as a number (0-6).
  const currentDay = getdayname(new Date(splitdate).getDay());

  tempraturefield.innerText = temp;
  locationfield.innerText = locationName;
  dateTimefield.innerText = `${splitdate} ${currentDay} ${splittime}`;
  condition.innerText = condition;
}

function getdayname(number) {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tueday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Don't Know";
  }
}

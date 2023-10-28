// Even Propagation

// Capturing Phase: Events are captured from the root to the target element. handler argument for capturing  is true.
// Target Phase: The event reaches the target element.
// Bubbling Phase: Events bubble up from the target element to the root. Handler argument for bubbling if false
window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);
document.querySelector(".container").addEventListener(
  "click",
  function () {
    console.log("Container");
  },
  false
);
document.querySelector(".outer").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation(); // use for stop propagation, in capturing
    // window --> documant --> container --> outer
    console.log("Outer");
  },
  false
);

document.querySelector(".inner").addEventListener(
  "click",
  function () {
    console.log("Inner");
  },
  { once: true } // only single time run
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    // console.log(e); //window --> document --> container --> outer --> Innner --> e object
    // console.log(e); // in bubbling --> clicked --> Inner --> Outer --> Container --> Document --> Window
    // console.log(e.target); //give target button
    console.log((e.target.innerText = "Clicked!"));
  },
  false
);

// for anchor tag --> Jb hm link pe work krte hai to to ptabagation show nhi hota output me bcz link kisi ar jagah redirect kart hai.
// but agar hm preventdefault() use karte hai to show hone lagta hai.
document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    // console.log(e); //window --> document --> container --> outer --> Innner --> e object
    // console.log(e); // in bubbling --> clicked --> Inner --> Outer --> Container --> Document --> Window
    // console.log(e.target); //give target button
    console.log((e.target.innerText = "Clicked!"));
  },
  false
);

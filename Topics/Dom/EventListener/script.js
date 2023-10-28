// Add event listener on btn 2

const buttonTwo = document.querySelector(".btn2");

function alertBtn() {
  alert(
    "JavaScript use name JAvaScript bcz at that time java is very popullar language"
  );
}

// onclick and click are diffrent, onclick use n HTML and click use in js
buttonTwo.addEventListener("click", alertBtn);

const buttonThree = document.querySelector(".div3");

function overdiv3() {
  buttonThree.style.backgroundColor = "green";
}

buttonThree.addEventListener("mouseover", overdiv3);

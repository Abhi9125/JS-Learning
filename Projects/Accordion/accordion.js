const accodian = document.querySelectorAll(".content-contsiner");

console.log(accodian);

for (let i = 0; i < accodian.length; i++) {
  accodian[i].addEventListener("click", function (e) {
    console.log(e);
    this.classList.toggle("active");
  });
}

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

document.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

modal.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

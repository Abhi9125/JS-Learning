/* Event Delegation --> Event Delegation ka use hm tb karte hai jb hame kisi single parent se mutiple child ke liye 
handler lagana ho*/

document.querySelector("#category").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id"));
  //   window.location.href = "/" + e.target.getAttribute("id");
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.getAttribute("id");
  }
});

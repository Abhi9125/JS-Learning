// Dom Manipulation

// 1. Seleting the element

// getElementbyId
// const heading = document.getElementById("main-heading");
// console.log(heading);

// getElementByclassname
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// getElementsByTagName
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

/* querySelector() --> return first maching element in the html.
 */
// const listItems = document.querySelector("div");
// console.log(listItems);

/* querySelectorAll("div") --> this return all div tag that are present in html in an array;
 */
// const listItems = document.querySelectorAll("div");
// console.log(listItems); //NodeList(2) [div.container, div.container]
// Most of the developer use queryselecter, queryseleterAll, for selecting html elements

// --------------------------------------------------------------------------
/* 2. Css styling using Dom */

// const title = document.querySelector("#main-heading");

// // syntex for changing style using dom --> when we do style using dom it is happning as inline styling inline styling happing only on tag.
// title.style.color = "red";
// console.log(title);

// //Agar hame multiple element pr style krna hai to hame loop ka use krna hota hai

// const listItem = document.querySelectorAll(".list-items");

// console.log(listItem); // return an NodeList

// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = "2rem";
// }

// ---------------------------------------------------------------
/* 3. Creating Element using Dom
 */

// const ul = document.querySelector("ul");

// // create element
// const li = document.createElement("li");

// console.log(ul);

// // append element.
// ul.append(li);

// diffrence between append() and appendchild() --> append() is more faxible that add multiple element andd text at one go, but appenschild() add only one element in html

// // Modifying the text
// li.innerText = "X-Men";

// Modifying attributes & Classes

// // addAttribute
// li.setAttribute("id", "main-heading");
// //removeAttribute
// li.removeAttribute("id");
// // getAttribute
// const heading = document.getElementById("main-heading");
// console.log(heading.getAttribute("id"));

// Add Class Attribute
// li.classList.add("list-items");
// // remove class Attribute
// li.classList.remove("list-items");

// console.log(li.classList.contains("list-items")); //false

// // remove an element from HTML
// li.remove();

/* diffrence between innerHTML, textcontent, innerText
const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerHTML);  /*<spam>Neo</spam>
                                         The Matrix*/
//console.log(firstListItem.textContent); /* Neo
// The Matrix*/
//console.log(firstListItem.innerText);   /*Neo The Matrix*/

// mostly use innerText for modifing content, innerHTML -- security issue, textContent -- give same content

/*5 Travesh the DOM */

// Parent node traversal
// const ul = document.querySelector("ul");
// const html = document.querySelector("html");

// //parentNode hamesh akuch na kuch return krta hai.
// console.log(ul.parentNode); //body
// console.log(html.parentNode); // document, Dom hi dege return me
// //parentElement hamesha search element ka parent element deta hai.
// console.log(ul.parentElement); //body
// console.log(html.parentElement); // null

// // find grandparent
// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

/*Child Node Traversal*/

// const ul = document.querySelector("ul");

// children -- return all tag inside a tag, but childNode  -- return all thing inside the tag including text note .
// console.log(ul.childNodes);
// console.log(ul.firstChild); // text
// console.log(ul.lastChild); // text

// console.log(ul.childNodes[0]); //text

// // children
// console.log(ul.children);  //retunr all child of ul
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling node Traversal

const ul = document.querySelector("ul");

console.log(ul.previousElementSibling); //return previous sibling element
console.log(ul.nextElementSibling); // retrun nxt sibling element

console.log(ul.previousSibling); // return any thing that is privious to that element, like text, comment
console.log(ul.nextSibling); // return any thing that is next to that element, like text, comment

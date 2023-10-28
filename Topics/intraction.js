// Interaction: alert, prompt, confirm

// 1.  alert-------------------------------------
alert("Hello");

// 2.  prompt-------------------------------------
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// title
// The text to show the visitor.
// default
// An optional second parameter, the initial value for the input field.
let age = prompt("How old are you?", 0);

if (age > 18) alert(`You are ${age} years old and eligibal for vote`);
else alert(`You are ${age} years old and not eligibal for vote`);

// 3.confirm
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.
// For example:

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed

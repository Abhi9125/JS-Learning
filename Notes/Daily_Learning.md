# Unknown date

# 1. Getting Started

## <u>1. What is js</u>

JavaScript is a programming language initially designed to interact with elements of web pages.
In web browsers, JavaScript consists of three main parts:

- ECMAScript provides the core functionality.
- The Document Object Model (DOM) provides interfaces for interacting with elements on web pages
- The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

## <u>2. print Hello word</u>

```javascript
console.log("Hello World");
```

## 3. <u>Add JavaScript by using script, async, defer</u>

### <u>Add script only script tag</u>

When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts <script src="..."></script>: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

Scripts can’t see DOM elements below them, so they can’t add handlers etc.
If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

```javascript
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

There are some workarounds to that. For instance, we can put a script at the bottom of the page. Then it can see elements above it, and it doesn’t block the page content from showing:

```javascript
<body>
  ...all content is above the script...
  <script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
</body>
```

But this solution is far from perfect. For example, the browser notices the script (and can start downloading it) only after it downloaded the full HTML document. For long HTML documents, that may be a noticeable delay.

Such things are invisible for people using very fast connections, but many people in the world still have slow internet speeds and use a far-from-perfect mobile internet connection.

Luckily, there are two script attributes that solve the problem for us: defer and async

### <u>defer</u>

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

Here’s the same example as above, but with defer:

```javascript
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

In other words:

- Scripts with defer never block the page.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

```javascript
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...content after scripts...</p>
```

- The page content shows up immediately.
- DOMContentLoaded event handler waits for the deferred script. It only triggers when the script is downloaded and executed.

> > Deferred scripts keep their relative order, just like regular scripts.

Let’s say, we have two deferred scripts: the long.js and then small.js:

```javascript
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

### <u>async</u>

async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded. As simple, as it can get, right?

Here’s an example similar to what we’ve seen with defer: two scripts long.js and small.js, but now with async instead of defer.

They don’t wait for each other. Whatever loads first (probably small.js) – runs first:

```javascript
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>
```

- The page content shows up immediately: async doesn’t block it.
- DOMContentLoaded may happen both before and after async, no guarantees here.
- A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.

> > Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them:

` Note --> defer and async both use only for externale js file.`

## Summary

defer and async both not block the HTML page rendring.
But the main diffrence b/w both of them is:
In defer script load in backgroud when HTML page rendering and exicute in last of full HTML rendering.if in HTML have any DOM Listner that will exicute after the exicution script.
In async it also load in background but after loading it execute immeditly.if multiple HTML file have multiple script they excuted in async type.
[Readmore more about defer and async click on link](https://javascript.info/script-async-defer);

# 2. Fundamentals

## Syntex

### Statements

A statement is a code that declares a variable or instructs the JavaScript engine to do a task. A simple statement is terminated by a semicolon (;).
`(;) in js semicolon is optional`

````javascript
let message = "Welcome to JavaScript";
console.log(message);```
````

### Block

A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}. For example:

```javascript
if (window.localStorage) {
  console.log("The local storage is supported");
}
```

### Identifiers

Name of the variable, function , object, classes is know as identifers.It only contain (a-z),(A-Z),(\_),(0-9),($) never start with number(0-9)

### Comments

Comments are two type

- Single-line comments -- By using // This is a single - line comment
- Multiline cooments -- /_ This is a block comment _/

### Expressions

An expression is a piece of code that evaluates to a value. For example: 2 + 1

### Keywords & Reserved words

JavaScript defines a list of reserved keywords that have specific uses. Therefore, you cannot use the reserved keywords as identifiers or property names by rules.

### Summary

Use whitespace including carriage return, space, newline, and tab to format the code. The JavaScript engine ignores the whitespace.
Use a semicolon (;) to terminate a simple statement.
Use the curly braces ({}) to form a block that groups one or more simple statements.
A single-line comment starts with // followed by a text. A block comment begins with /_ and ends with _/. The JavaScript engine also ignores the comments.
Identifiers are names that you choose for variables, functions, classes, etc.
Do not use the reserved keywords and reserved words for identifiers.

## Variable

### Declare a variable

Variable names are case-sensitive. This means that the message and Message are different variables.

```javascript
var message; // declare
```

### Initialize a variable

```javascript
var message = "Hello"; // Inisialize
```

#### Undefined vs. undeclared variables

When a variable declare but not inisialize value it give undefine, But us a variable not declare it give refrenceError not defined

```javascript
var a;
console.log(a); // undefined
console.log(c); //Not defined
```

## Variable

> JavaScript has the primitive data types:

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available from ES2015
7. bigint – available from ES2020

> Javascript has the Non - primitive datatype
> Non-primitive values are mutable data types. The value of an object can be changed after it gets created. like array, object.

### undefined type

The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

```javascript
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined
```

### null type

The null type is the second primitive data type that also has only one value null. For example:

```javascript
let obj = null;
console.log(typeof obj); // object
//in js null is equla to undefiend
console.log(null == undefined); // true
```

### Number

JavaScript uses the number type to represent both integer and floating-point numbers.

> To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE. We can also use Infinity and -Infinity place MIN_VALUE and MAX_VALUE

> NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN
> The NaN has two special characteristics:
> Any operation with NaN returns NaN.
> The NaN does not equal any value, including itself.

> JavaScript numeric separator
> The numeric separator allows you to create a visual separation between groups of digits by using underscores (\_) as separators.
> For example

```javascript
let num = 100;
let price = 12.5;
let discount = 0.05;
console.log(num);
console.log(discount);
console.log(Number.MIN_VALUE);
console.log(-Infinity); // same as MIN_VALUE
console.log(Infinity); // Same as MAX_VALUE
console.log(Number.MAX_VALUE);
// NaN -- Not a Number this indicate invalid number
console.log("a" / 2); //NaN bcz string not devided by number
console.log(NaN / NaN); // NaN
console.log(NaN == NaN); // false --> The NaN does not equal any value, including itself.

// numeric separator(_) --> allows you to create a visual separation between groups of digits by using underscores (_) as separators.
// it also increase readability
const budget = 10000000000;
const numericSeparator = 10_000_000_000; // incerase readibility
console.log(numericSeparator); //10000000000
```

### boolean

The boolean type has two literal values: true and false in lowercase.

```javascript
// Boolean Type -- return true and false value
let inProcess = true;
let complete = false;
console.log(typeof complete);

b = 30;
console.log(typeof b); // number

b = "hello";
console.log(typeof b); //string

b = true;
console.log(typeof b); //boolean

b = null;
console.log(typeof b); //object

console.log(typeof b); //undefined

// we can conver other types of variable into boolean true or false with the help of Boolean method Boolean().
console.log(Boolean("Hi")); //true
console.log(Boolean(" ")); //false
console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); //false
console.log(Boolean(0)); // true
console.log(NaN); //false
console.log(Boolean({ foo: 100 })); // true if object is non empty
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

let error = "An error occurred";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
let error = " ";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

> `Boolean() use  -- >` This table is important because some statements automatically cast a non-boolean value to a boolean value using the Boolean() function.
> For example, the if statement executes a block if a condition is true. If you use a non-boolean value, it’ll use the Boolean() function to implicitly cast that value to a boolean value.

```javascript
let error = "An error occurred";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

In this example, since the error variable holds a non-empty string, the if statement evaluates its value to true. Therefore, it executes the console.log(error) to output the error to the console.
If you change the value of the error variable to an empty string (""), you won’t see anything in the output because the if statement evaluates it as false:

```javascript
let error = " ";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

# Unknow Date

# String

String are asequence of character.

## String Topics

1. string
2. string length
3. Accessing
4. Concatenation
5. Converting
6. comparing Stirng
7. search()
8. indexOf()
9. lastIndexOf()
10. includes()
11. trim()
12. trimstart()
13. trimEnd()
14. split()
15. substring()
16. slice()
17. concat()
18. Template Literals
19. replace(replace by, want to replace);
20. toLowerCase()
21. toUpperCase()

```javascript
//1. string -- string are squence of character it writen in "" , '' , ``  backtricks -> use for access variable value in js
let greeting = "Hi";
let message = "Bye Bye";
// Bye<space>Bye
// 012  3    678

//2. Both are diffrent str, bcz in js string are immutable.
let str = "JavaScript";
str = str + " String";
console.log(str); // JavaScript String
// length of string
console.log(str.length);

//3.Accessing the character []
let s = "JavaScript";
console.log(s[0]); // J
// string in js is immutable
s[0] = "j"; // access and change the character
console.log(s); //JavaScript , Not javascript

// 4. Concatenation string
let name = "abhi";
let lastname = "singh";
let fullname = name + " " + lastname;
console.log(fullname);

/*5. Converting values to string--> to convert non string value to string we can use following 
1. String(n);
2. "" + n;
3. n.toString();
*/
let stat = 10;
console.log(typeof stat); //number
let converstat = stat.toString(); // we can also use ""+status
console.log(typeof converstat); // string

/*6. comparing String --> To compare two strings, you use comparison operators such as >, >=, <, <=, and == operators.
string are compare on its aynsii values
*/

let result = "a" < "b";
console.log(result); // true;

/*7. search() --> use to search and return first maching string index */
let str1 = "JavaScript Learning";
console.log(str1.search("S")); //4
console.log(str1.search("ar")); //13

/*8.  indexOf() --> Use to return the index number of a string or character if string or character present in it 
otherwise return -1*/

let str2 = "Focus on Goal";
console.log(str2.indexOf("o")); //1 give first occurance
console.log(str2.indexOf("cu")); // 2
console.log(str2.indexOf("zs")); //-1, not in str2

/*9. lastIndexOf() --> This is same as index of only difference is it return index of last occurance 
of string or character take the above example*/
console.log(str2.lastIndexOf("o")); // 10 --> return last index of 'o'
console.log(str2.lastIndexOf("zs")); // -1

/*10. includes() --> includes() check, is string contains a perticular substring or character
if cotain retrurn true otherwise return false*/
let email = "abhi.singh3333@gmail.com";
console.log(email.includes("@")); // true

/*11. trim() method --> removes all the starting whitespaces and ending whitespaces of a String
trimStart() --> remove whitespaces from beginning
trimEnd() --> remove whitespace from last.
*/
let str3 = "        Hello             World        ";
console.log(str3.length); // 39

console.log(str3.trim().length); //23

console.log(str3.trimStart()); //Hello             World

console.log(str3.trimEnd()); //        Hello             World
//No change in atual string
console.log(str3);

/*12. split() method --> Split a string into substrings using the specified separator and return them as an array.*/

let str4 = "JavaScript String split()";

// The following example uses the split() method to split the string into words:
let substrings = str4.split(" ");

console.log(substrings); //["JavaScript", "String", "split()"] remove space str4.

// Returning a limited number of substrings example
console.log(str4.split(" ", 2)); //['JavaScript', 'String']

/*13. substring() method --> same as slice string_name.substring(start,end) -> starting index is inclusive & end idx is exclusive*/
let str5 = "JavaScript SubString";

let subString = str5.substring(4, 9);
console.log(subString); //Scrip

// getting substring not from starting
console.log(str5.substring(5)); //cript SubString

/*14. slice() method --> string_name.slice(start,end) -> slice() return a substring, it have two parameter start, end. 
start -- include and end -- excude  
take above example 
*/
let slicestr = str5.slice(3, 7);
console.log(slicestr); //aScr

// prints starting to end
console.log(str5.slice(8)); //pt SubString

// If the end is negative, the slice() method treats it as str.length + end. For example:
console.log(str5.slice(0, -5)); //JavaScript SubS

/*16. concat() -->concat() method accepts a list of strings and returns a new string that contains the combined strings */
let str6 = "hi";
let concatMsg = str6.concat(" ", "Abhi");

console.log(concatMsg);

/*17. JavaScript Template Literals --> Use the backtick to create a string literal for string interpolation(means use varibale inside the string).*/

let firstName1 = "John";
let lastName1 = "Doe";

let greeting1 = `Hi ${firstName1}, ${lastName1}`;
console.log(greeting1); // Hi John, Doe

/*18.replace() --> This is use for replacing the string and character from a string.
let newStr = str.replace(substr, newSubstr);
*/
let str7 = "JS will, JS will rock you!";
let newStr7 = str.replace("JS", "JavaScript");

console.log(newStr7); //JavaScript will, JS will rock you!

/*19. replaceAll() --> ES2021 introduced the String replaceAll() method that returns a new string with all matches of a pattern replaced by a replacement:
 */
let str8 = "JS will, JS will, JS will rock you.";
let newStr8 = str.replaceAll("JS", "JavaScript");

console.log(newStr8); //JavaScript will, JavaScript will, JavaScript will rock you.

/*20. toLowerCase --> use for lower case 
toUpperCase --> use for upper case*/

let str9 = "javascript";
console.log(str9.toUpperCase()); //JAVASCRIPT
console.log(str9.toLowerCase()); //javascript
```

# Unknown Date

# Objects

## Learning

- How to create a object
- Declare an object
- Accessing the object by (.) notation
- Accessinng the object by [] bracket and when use [] braket
- Object nesting , accessing the nested object
- Traversing in object
- Deleting and adding key in object
- Difference b/w (.) and [] bracket and where it use
- Property names limitations
- Object clonning.
- Clonning a nested Object. by using Object.assign(clone,obj);

```JS
//1.-------------------- empty object----------------------------
// var obj = {};
// console.log(obj);

// //2.------------------Declare an objects ------------------------------------
// An object can be created with figure brackets {…} with an optional list of properties.
//  A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
var person = {
  name: "Abhishek",
  age: 23, // 23--> is integer but "23",'23',`23`--> is string
  phone: 9999999,
  ismale: true,
  "School Name": "St. Xavier school",
};

console.log(person); // person object

//3.------------------dot Notation --> use to get key and value in object---------------------------------
console.log(person.name);
console.log(person.age);

//4.-----------------Square bracket --> also use to get key and value --------------------------------
console.log(person["phone"]); //9999999
console.log(person["School Name"]); // jb bhi space ho to [] ka use krte hai object ke key ko acess krne ke liye.

//5.----------------nesting of objects---------------------------------------------
var captainAmerica = {
  firstname: "Steve",
  Lastname: "Rogers",
  friends: ["Bucky", "Tony Stark", "Bruce Barner"],
  isAvenger: true,
  address: {
    state: "Manhatain",
    city: "New York",
    country: "USA",
  },
  sayhi: function () {
    console.log(`hello my name is ${captainAmerica.firstname}`);
  },
};

console.log(captainAmerica); // hole object print
console.log(captainAmerica.friends); // ["Bucky", "Tony Stark", "Bruce Barner"]
console.log(captainAmerica.friends[1]); // Tony Stack
console.log(captainAmerica["friends"][0]); // Bucky

// ------------------------nested object accesing ---------------------------
// console.log(captainAmerica.address.state);
// console.log(captainAmerica["address"]["city"]);

//6.---------------------- Travesing in object --------------------------------
// for in loop   -- > gives key
for (let key in captainAmerica) {
  console.log(key); // only key print  output == fristname,Lastname, friend,...
  console.log(captainAmerica[key]); // print value of the key
}

//7.-------------------------deleting a key from an object --------------------------
//     delete captainAmerica.age;
//     console.log(captainAmerica);

//8.-----------------------------Adding a key in object -----------------------------------------
// captainAmerica.height = "180";
// console.log(captainAmerica);

//9.---------------------------------Difference b/w (.) DOT and [] square notation -----------------------------
var user = {
  name: "Sandeep",
  age: 30,
};
let abc = "age";
console.log(user.name); // Sandeep
console.log(user.abc); // output --> undefined
console.log(user["age"]); // 30
console.log(user[abc]); // 30
console.log(user["abc"]); // output --> undefined

// If we defjine a variable and give it a value to it, and we use [] for key  inside the object it will take that variable value, look at the below example.
// let fruit = prompt("Which fruit to buy?"); // value substitute
// let bag = {
//     [fruit] : 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.fruit);// output --> undefined
// console.log(bag[fruit]);  // output --> 5
// console.log(bag["fruit"]); // output --> undefined
// Square brackets are much more powerful than dot notation.
// They allow any property names and variables.
// But they are also more cumbersome to write.

let fruitName = "apple";
//expression evaluate like string me jaise hoti h ${1+1}
let items = {
  [fruitName + "computers"]: 4,
};
console.log(items); //applecomputers : 4

//10.-----------------------------property vakue shorthand use for when key and value both are same -----------------
// var computerbrand = "apple";
// var processor = "M2 sillion";
// var ram = "16GB";

// var specification ={
//     computerbrand : computerbrand, // computerbrand :"apple"
//     processor : processor,
//     ram : ram
// };
// console.log(specification.computerbrand);
// console.log(specification["processor"]);

// // Instead of name:name we can just write name, like this:
// var specification ={
//     computerbrand, // computerbrand :"apple"
//     processor,
//     ram
// };
// console.log(specification.computerbrand);

//11.-------------- Property names limitations---------------

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

// these properties are all right
var obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6

// // In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
// // Other types are automatically converted to strings.
// // For instance, a number 0 becomes a string "0" when used as a property key:

// var obj = {
//   0: "test" // same as "0": "test"
// };
// // both alerts access the same property (the number 0 is converted to string "0")
// console.log( obj["0"] ); // test
// console.log( obj[0] ); // test (same property)

//12.-------------------Ordered like an object----------------
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
var codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};
console.log(codes); // 1,41,44,49
for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

var person = {
  name: "Abhishek",
  age: 23,
  phone: 9999999,
  ismale: true,
  "School Name": "St. Xavier school",
};

console.log(person); // same as jaise object me input hai
for (let key in person) {
  console.log(key);
}

//--------------------Object references and copying/or read artical-------------------------

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Let’s start with a primitive, such as a string.
// Here we put a copy of message into phrase:

// let message = "Hello!";
// let phrase = message;
//As a result we have two independent variables, each one storing the string "Hello!"

// Objects are not like that.
// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// Let’s look at an example of such a variable:
// let user = {
//   name: "John"
// };
// And here’s how it’s actually stored in memory:
//The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.
// We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
// When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and
// performs the operation on the actual object.

// ---------------------------object cloning-------------------------------
// var obj = {
//     name : "abhi",
//     age : 30,
// }

// var clone={};
// // jiske andar copy karna h, jaha se copy karna hai
// Object.assign(clone,obj,{ismale: true},{favoritefood : "pizza"});
// console.log(clone);
// obj.name = "pete";
// console.log(obj.name);  //pate
// console.log(clone.name); //abhi

// ----------------------------nested object cloning----------------------
let user1 = {
  name: "pate",
  size: {
    height: 182,
    width: 50,
  },
};

var clone = {};
Object.assign(clone, user1);
user1.size.height = 100;
console.log(user1); //
console.log(clone); //height ko 182 hi hona chahiye tha but 100 ho gya bcz both clone and user1 point the same object(refernce)size
```

# 22/10/2023

# DOM_MANIPULATION

## Learning in dom

- Seleting the element
- Css styling using Dom
- how to do style on multiple element with same id/class/name
  - Creating Element using Dom
  - Difference B/w append and appendChild
  - How to Modify the text
  - how to set/get/remove attribute in element
  - how to remove element from HTML
  - Difference b/w innerText/innerHTML/textContent
- Travesh the DOM
- parent node travesal -- parentNode/parentElement Traversal
- how to find grand parent
- child node traveral -- childNodes/firstChild/lastChild/children/fristElemnetChild/lastElementChild
- Sibling node Travesal -- previousElementSibling/nextElementSibling/previousSibling/nextSibling
- Dom EventListner
- Event Propagation Read More -- https://medium.com/@nusrat35/a-deep-dive-into-the-event-propagation-advanced-concept-of-javascript-63a906e389a#id_token
- Event Delegation

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1 id="main-heading">Favourite Movies Franchise</h1>
      <ul>
        <li class="list-items">
          <spam>Neo</spam>
          The Matrix
        </li>
        <li class="list-items">Star Wars</li>
        <li class="list-items">Harry Potter</li>
        <li class="list-items">Lord of the Ring</li>
        <li class="list-items">Marvel</li>
      </ul>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

```CSS
*{
    margin: 0%;
    padding : 0%;
    box-sizing: border-box;
}
html, body{
    height: 100%;
}

body{
    height: 100%;
    background-image: url(https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80);
    background-position: center;
    /* background-repeat: no-repeat; */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    color: #E9B824;
    height: 60%;
    width: 50%;
    border: 4px solid #065741;
    border-radius: 5px;
    padding:10px;
}

.list-items{
    height: 50%;
    color:black;
    background-color: white;
    padding: 10px;
    border: 5px solid #93cadb;
    margin: 5px;
    list-style-type: none;
}
```

## Seleting the element

```JavaScript

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
```

## DOM EventListner

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 style="text-align: center">Evet Listner</h1>
    <div class="container">
      <div class="div1">
        <h1>Example 1</h1>
        <button class="btn1">Enter</button>
      </div>
      <div class="div2">
        <h1>Example 2</h1>
        <button class="btn2">Enter</button>
      </div>
      <div class="div3">
        <h1>Example 3</h1>
        <button class="btn3">Enter</button>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0%;
    padding : 0%;
    box-sizing: border-box;
}
html, body{
    height: 100%;
    background-color:darkkhaki
}

.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}

.div1{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}


.div2{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}

.div3{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}
```

> JS CODE

```js
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
```

## Event Propagation

- Capturing Phase: Events are captured from the root to the target element. handler argument for capturing is true.
- Target Phase: The event reaches the target element.
- Bubbling Phase: Events bubble up from the target element to the root. Handler argument for bubbling if false
- read more about it -- https://medium.com/@nusrat35/a-deep-dive-into-the-event-propagation-advanced-concept-of-javascript-63a906e389a#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.
  > HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Propgation</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <a href="" class="button"> click </a>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0%;
    padding : 0%;
    box-sizing: border-box;
}
html, body{
    height: 100%;
}

.container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
}

.outer{
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    background-color: bisque;
}


.inner{
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    background-color: chartreuse;
}
```

> JS CODES

```JS
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
```

## EventDelegation

Event Delegation --> Event Delegation ka use hm tb karte hai jb hame kisi single parent se mutiple child ke liye
handler lagana ho

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=ul, initial-scale=1.0" />
    <title>Evnet Delegation</title>
  </head>
  <body>
    <ul id="category">
      <li id="laptop">laptop</li>
      <li id="mobile">Mobile</li>
      <li id="camera">Camera</li>
      <li id="fashion">Fashion</li>
    </ul>
    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.category{
    width: 100%;
}
```

> JS CODE

```JS
document.querySelector("#category").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id"));
  //   window.location.href = "/" + e.target.getAttribute("id");
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.getAttribute("id");
  }
});
```

# 26/10/2023

# Promise

## Learning in promise

- What is callback hell
- Inversion of Control
- How to resolve Inversion Control
- Use of Promise
- Erro handling in promise
- How promise resolve callback hell problem
- How with the help of promise we resolve callback hell problem
- how to create our own promise
- What is promises chaining
- Advanced Error Handling

> 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom)
> 2. Inversion of control is overcome by using promise.
>    2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.

    2.2) A promise has 3 states: pending | fulfilled | rejected.
    2.3) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
    2.4) A promise resolves only once and it is immutable.
    2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'

4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

```Javascript
// -------------------------------------------
// 1. Callback Hell -- > when multiple call depend on eachother is know as callback hell
// -------------------------------------------

const cart = ["Shoes", "Sweater", "Hoods"];

// two step to place a order
// 1. createOrder
// 2. proceedPayment

// normal call
//below function are async functions
api.createOrder();
api.proceedPayment();
api.confirmPayment();

// assuming above each one depend on each other like when order is creaded then proceespayment call
// and when proceedPayment donethen comfirmPayment call

api.createOrder(cart, function () {
 api.proceedPayment(function () {
   api.confirmPayment(function () {
     api.orderSummary(); //callbackhell
   });
 });
});

// ----------------------------------------------
// 2. Inversion of control -- We lose the control of our code when we use calling a function by callback
// ----------------------------------------------

api.createOrder(cart, function () {
 api.proceedPayment();
});

```

## How to resolve the inversion control problem -- By using promise

- Before promise thing are work like above code , in that code the major problem with inversion control for solving inversion control js introduce the concept of promises.

  > Promise -- promise is an empty object that will execute only once and it call by `.then` function if a promise return error that will handle by `.catch` function.

  > promise return three state --
  > i. pending state -- Nither fulfill or rejected
  > ii. fulfill state -- fullfill
  > iii. rejectected state -- rejected
  > promises are immutable

```javaScript
const cart = ["shoes", "pants", "kurta"];

// with callback(before promises)
// below code, it is resposibility of createOrder function to first create the order and then proceed for payment and call callback function proceedPayment

api.createOrder(function () {
  api.proceedPayment();
});

// in the above code the problem is inversion of control
// to fix this problem js introduce the promise conpect, promise thinis nothing but it is a empty object with some data object.
// now createOreder function return a promise that is store in a variabe watch below code.

const promiseRef = createOrder(cart);

// promiseRef access by '.then()'
// inisialy orderId is undefined and pending state bcz createOrder is a async function that take time to exicute
// inisialy it will be undefined so below code won't trigger after some time,when execution has finished and promiseRef has the data then automatically the below code will trigged.

promiseRef.then(function () {
  proceedPayment(orderId);
});
```

## How promise resolve callback hell problem -- With the help of promise chaining.

```javascript
createOrder(cart)
  .then(function () {
    return proceesPayment(OrderId);
  })
  .then(function () {
    return confirmPayment(PaymentStaus);
  })
  .then(function () {
    return UpdateWallet(balance);
  });
```

## Creating our own promise --

> How to create our own promise --> To create our own promise js provide a promise constructer that have a callback function and it take two parameter resove and reject. `resolve` and `reject` also a function that is internaly define by js.

```javascript
const cards4 = ["shoes", "pants", "kurta"];

// Consumer part of promises
const promise = createOrder(cards4);
// our expectation that above function return me a promise

console.log(promise); // inisialy it print undefined

promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  // if promise give error so it will handle by `.catch()`
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creatin gthe promise
function createOrder(cards4) {
  const promise = new Promise(function (resolve, reject) {
    // `resolve`,`reject` are functio which is passes by JS to us in rder to handle success and failure of function call.

    // let take a real world example
    // We want to create a order online store
    // Mock logic steps
    // 1. validateCard
    // 2. Insert in DB and get an orderID
    if (!validateCard(cards4)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345"; //we got this id by calling to db (Assumption)
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return promise; // if the promise return true so above promise will resolve
}

function validateCard(cards4) {
  return true; // assume
}

// output
// Promise {<pending>}
// script.js:267 12345
```

## Promise Chaining --

Promise Chaining -- In promise chaining whatever return from the frist `.then` function it become
data for the next `.then ` function and so on... / or
when each promise depend on each other is know as promise chaining.
At any point of promise chaining, if promise is rejected the execution will fallback to `.catch` and others promise would not run.

```javascript
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return true; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}

// output
// 12345
// ProceedToPayment running
// Payment Suceesfull
```

## Advanced Error Handling

> `.catch()` wo agr sable last me hai ar single `.catch()` to pure promise chining me koi bhi reject hoga to pura promise chaing uske bt reject ho jayega

- `.catch()` ko hm ko pertical promise check kne ke liye lga skte hai is condition me `.catch()` us promise se leke usse upar wale promise me error dekhega.
- agr `.catch()` promise chaining ke bich me lagate hai ar ast me koi `.catch()` to `.catch()` ke niche wale promise defenetly chlega.
- In simple word, `.catch()` eek level ki tarah km kr rha jis level pe hoga usse leke usse top wale me reject dekehega.
  >

```javaacript
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .catc(function(){
    console.log("Error Got");
  })
  .then(function (paymentInfo) {
    console.log("this is defenetly exicute");
  })

```

```JS
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return true; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}
```

- Case 2: `.catch() use for perrticular promise`

```JS
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function () {
    console.log("This function defenatly run");
  });
// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return false; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}
// output
// Error: cart is not valid
// new Promise (<anonymous>)
// createOrder
// ProceedToPayment running
// Payment Suceesfull
```

- Case 3 : When `.catch()` a perticular promise and also in end `.catch()`

```JS
const carts = ["shoes", "pants", "kurta"];

//promise
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .catch(function (){
    console.log("Error Got");
  })
// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return false; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    reject("Error");
  }); // asume return a promise
}
// Output
// Card is not valid
// ProceedToPayment running
// Error Got
```

# 28/10/2023 - Learning

- What rest and spread oprator and it is use
- Array and Object destructuring
- What is debouncing in js
- What is Regular expression in js, why it use , how to create a regular expression.

## What is rest and spread oprator and its use

> rest -- rest opretor use for rest the value.

> spread -- spread oprator use for spread the value. see below example

```js
// --1. Cloning object with spread operator
const person1 = {
  name: "adam",
  age: 25,
};

// --New refrence created for person2 deep copy
const person2 = { ...person1 };
person2.name = "Tom Crush";
person2.age = 35;
console.log("person 1 age = " + person1.age); // 25
console.log("person 2 age = " + person2.age); //35

// --2. Cloning array with spread operator
const arr1 = [4, 5, 6, 7, 8];
console.log(...arr1); // 4 5 6 7 8 , print sperate value.
const arr2 = [...arr1]; // new refrence create for arr2 deep copy

console.log("before edit = " + arr1[1]); //5
console.log("before edit = " + arr2[1]); //5

arr2[1] = 400;
console.log("after edit = " + arr1[1]); //5
console.log("after edit = " + arr2[1]); //400

//-- 3. spread operator as a argument

const max = Math.max(...arr2);
console.log("Maximum in arr2 = " + max); //400

//-- 4. use spread operator to adding to array or object
const person3 = { ...person1, ...person2 };
console.log(person3);

const arr3 = [...arr1, ...arr2];
console.log(arr3); //

//   -- Rest operator --  use for rest the arguments in a single value in function, we use rest operator if argumetn are diffrent type like string, number etc.

// -- Before rest operator

function sum() {
  let sum = 0;

  // -- arguments given by js that store the parameter in object form
  for (let i in arguments) {
    console.log(arguments); //print object argument with 10,20
    console.log(typeof arguments); // object

    for (let i in arguments) {
      sum += arguments[i];
    }
  }
  console.log(sum); // 60
}

// sum(10, 20);
sum(10, 20, 30); // 180

// -- if we pass sum("abhi", 10 , 20 , 30) so we not perform that operation so that reasion we rest operator
//-- we always use rest parameter in last, don not use like this(...args, a ,b)
function sum1(a, ...args) {
  console.log(arguments); //print all argument that pass in function calling time
  console.log(args); // [10, 20,30]
  console.log(Array.isArray(args)); // true

  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum1("abhi", 10, 20, 30));
```

## Array and Object destructuring

> Destructuring in JavaScript is a way to extract data from arrays and objects into variables. It is a powerful feature that can make your code more concise and readable.

> Array destructuring -- Array destructuring allows you to extract values from an array at specific indexes. To do this, you use square brackets ([]) and list the index of the value you want to extract.

> Object destructruning -- Object destructuring allows you to extract properties from an object into variables. To do this, you use curly braces ({}) and list the name of the property you want to extract.

```js
// -- Array Destructuring means assigning array indexl value to seprate variable

let arr = ["abhi", 10, 40, , , 200];

let [name1, a, b, c, d = 100, e] = arr;
console.log(name1); //name
console.log(a); //10
console.log(b); // 20
console.log(c); //undefined , if value is not present
console.log(d); //100 we can set a defalt value in it
console.log(e); // 200

//-- Assign value inn rest operator
let [name2, ...args] = arr;
console.log(name1); // abhi
console.log(args); //  [10, 20, 30, 40]

// -- Array Destructuring in function
function desct() {
  return [10, 20, 30];
}

let [a1, b1, c1] = desct();
console.log(a1); //10
console.log(b1); // 20
console.log(c1); //30

// -- Object destructuring same as array destructuring, the only diffrent is in
// -- object destructing varibale name same as key name that ar in object. below ex--

let obj = {
  Fname: "rahul",
  Lname: "Anand",
  age: "25",
};

let { Fname, Lname, age, address } = obj;

console.log(Fname); //rahul
console.log(Lname); //Anand
console.log(age); //25
console.log(address);
```

## What is debouncing in js

> Debouncing in JavaScript is a technique that limits the frequency at which a function is called. It is useful for preventing functions from being called too often, which can improve performance and prevent unnecessary side effects.

```JS
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

// we can also write above code like below code
const debounce = function (fn, d) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(this, args);
    }, d);
  };
};

const batterFunction = debounce(getData, 300);
```

## What is Regular expression in js, why it use , how to create a regular expression.

> Read more link -- https://www.javascripttutorial.net/javascript-regular-expression/

```js
// -- Regular Expression --> Regular Expression are object Js provide build in RegExp type that allows you to work
// --with with regula expression, Regular Expression use for searching and replacing string that match a pattern.
// --They have many application like form validation

// --Creating  a regular expression --> To creatin a regular expression we forward-falsh`/..../`
// let re = /hi/;

// --also create regural expression with RegExp
// let re = new RegExp(/hi/);

// --testing for matching --> test() find matching in strinng. if match return true, otherwise return false.

// let re = /'hi/;
// let result = re.test('hi John');
// console.log(result);  //true

// -- Using pattern flags(i) --> The i flag ignores cases when searching. The letter i stands for ignore.
//--By default, searches are case-sensitive. For example /hi/ only matches the string `hi` not `Hi`.
// --To search for a string `hi` in any cases, you use the i flag:

// let re = /hi/i;
// let result = re.test("Hi John");
// console.log(result); //true

// --The global flag(g) --> global flag(g) use to find all matching element in the string
// --The exec() method is a RegExp method that searches for a match in a string and returns the first match. If there is no match, it returns null.
let message = "Hi, are you there? hi, HI...";

let re = /hi/gi;

console.log(re.exec(message)); // ['hi']

// searching string -->  The method str.match(regexp) returns all matches of regexp in the string str.
// Create a regular expression to match the word "apple".
```

# 30/10/2023

- Throttling

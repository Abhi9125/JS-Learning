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

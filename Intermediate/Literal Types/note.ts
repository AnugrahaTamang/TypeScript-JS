/* Literal Types: Literal types allow you to  specify a value that can only
be one specific literal value. This means that a variable with a literal type
can only have one specific value and no other */

let color: "red" | "crimson" | "fusha";
color = "red";
console.log(color); //valid : red
// color = "black";
// console.log(color) // Invalid: error
color = "crimson";
console.log(color)

let isTrue : true |  false;
isTrue = true;
console.log(isTrue)


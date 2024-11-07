/* Array Types: Array are a type of object that 
can store multiple values of the same data type.
arrays in typescript are typed, 
which means you can specify the type of values that an array cna hold */

//Two Types of Arrays
//1. Using the square bracket notation [] to  indicate an array of a specific type
//2. Using the generic array <type> notation to indicate an array of a specific type

// [] Notation Example
const nums: number[] = [2, 5];
console.log(nums);

const stringvalue: string[] = ["Anugraha Tamang", "Ramit tamang"];
console.log(stringvalue);
stringvalue.push("Amisha Tamang");
console.log(stringvalue);

// Generic array example
const items: Array<string> = [];
items.push("one","tw0");
console.log(items);

const numsone: Array<number> = [23,24];
numsone.push(22,25);
console.log(numsone);

/* Multi Dimensional : A multidimensional array is 
that contains other arrays as its elements. Multi-Dimensional arrays can be defined using the same
notation as one-dimensional arrays, but with nested square brackets*/
//Example of MultiDimensional array
const multidim: number[][] = [[23,32,5]];
console.log(multidim);

const multithree: number[][][] = [[[4, 34, 35]]];
console.log(multithree);
const multifour: string[][][][] = [[[["ONE", "TW0"]]]];
console.log(multifour)



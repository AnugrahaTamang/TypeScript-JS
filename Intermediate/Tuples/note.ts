/* Tuples: Tuple is a type that represent an array with a fixed number of elements,
where each element can have a different type. The order of the types in the tuple
defination corresponds to the order of the values in the actual array. Tuples are similar
to arrays, but they have a specific structure and can be used to model finite
sequences with known lengths. */
// Tuples are similar to array but not length.
let myTuple: [string, number] = ["hello", 23];
console.log(myTuple[0]);
console.log(myTuple[1]);

const Products: (number | string)[] = ["anugraha", 23]
console.log(Products)

//Destructuring
let Person: [string, number] = ["Anugraha", 22];
let [Name, age] = Person;
console.log(Name);
console.log(age)
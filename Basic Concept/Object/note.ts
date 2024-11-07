/* Object: An object in typescript is a structured data type that represents
a collection of properties, each with a key and an associated value. The Properties
of an object can have specific types, and the object itself can be annotated with
a type, often defined using an interface of a type alias. typescript uses structural
typing, meaning that the shape of an object(its structure of properties) is what matters for type compatibility. */
//Example of object :
const person: {firstName: string; lastName: string; age: number} = {
    firstName: "Anugraha",
    lastName: "tamang",
    age: 33
};
console.log(person)
console.log(person.firstName)

//factory function in ts with object
function printUser(): {name: string; age: number; location: string} {
    return{
        name: "Anugraha Tamang",
        age: 33,
        location: "kathmandu",
    };
};
console.log(printUser())
console.log(printUser().name)
console.log(printUser().location)


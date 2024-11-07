//Optional Properties: you can make a certain property in an object type by adding a question mark (?) after the property name.
type User = {
    name: string;
    age?: number;
   readonly location: string
}
const user: User = {
    name: "ramit",
    location: "china"
}

// when we used the readonly keyword we can change that property value 
user.name = "vandai";  // Easily we can do it
user.location = "Nepal"; // Error
console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`)
// age: is undefined so used of this ? question mark if we don't used it error show 



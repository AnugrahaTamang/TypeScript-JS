/* Intersection Types: An intersection type is a way to combine multiple types into
a single type that includes all the properties and methods of each constituent type.
An intersection type is denoted by the & symbol */

// Example:
type UserInfo = {
    first: string;
    last: string;
    age: number;
};
type AccountDetails = {
    email: string;
    password: string;
};

type Info = UserInfo & AccountDetails //combine the type

const jewan: Info = {
    first: "Jewan",
    last: "tamang",
    age: 23,
    email: "jewan@gmail.com",
    password: "Password23",
};


console.log(`My name is ${jewan.first} ${jewan.last} Age: ${jewan.age} Email is ${jewan.email} Password: ${jewan.password}`);


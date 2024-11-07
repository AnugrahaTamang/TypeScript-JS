//Type Aliases: A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a  more meaningful or decriptive name. Type aliases are defined  using the type keyword, followed by the name of the alias, and equal sign (=), and the type it refers to.
//Example of type alias:
type User = {
    name: string;
    age: number;
    location: string;
}
const printUserInfo = (user: User) => {
    return `Name: ${user.name} Age: ${user.age} Location: ${user.location}`
}
const res = printUserInfo({name: "Anugraha", age: 33, location: "Ktm"});
console.log(res);
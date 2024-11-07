/* Unions: Unions are used to declare a type that can have one of several
possible types. Unions are useful when we want to allow a variable or
parameter to accept multiple types. The syntax for defining a union type in 
typescript uses the pipe symbol (|) */

let password: string | number = 39;
console.log(password)
password = "anugraha";
console.log(password)

type UsersInfo = {
    first: string;
    last: string;
    age: number;
}
type AccountDetail = {
    email: string;
    password: string
}
 
let users: UsersInfo | AccountDetail = {
email: "anu@gamil",
password: "adkjv"
};
console.log(users.email)
console.log(users.password)

const items: (number | string)[] = [23, 21, 'hello'];
console.log(items)

const storeOne: (boolean | number | string | Object)[] = [23, 323, "Ramit", true, {name: "vandai"}];
console.log(storeOne)

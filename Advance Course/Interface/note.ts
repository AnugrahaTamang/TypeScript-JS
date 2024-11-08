/*Interface:  Interface is a way to define a contract for the shape of an object.
It specifies the properties and their types that an object must have. Interfaces are a powerful
tool for enforcing a certain structure in your code */
//Inderface Defination
interface Person{
    first: string;
    last: String;
    age: number;
}
//Usage
//Interface with object
const examplePerson: Person = {
    first: "Anugraah",
    last: "tmg",
    age: 30
};
console.log(examplePerson)
console.log(`My age is ${examplePerson.age}`)

/*While interface are commonly used to define the structure of objects,
they are not limited to just objects. Interface in typescript can also be used to
describe the shape of functions and classes*/
//Interface in function:
interface mathOperation{
    (x: number, y: number): number;
}
const add: mathOperation = (a, b) => a+b;
const sub: mathOperation = (a, b) => a-b;
console.log(add(3, 4))
console.log(sub(12, 2))

//Interface in class 
interface Vehicle{
    start(): void;
    stop(): void;
}
class Car implements Vehicle{
    start(){
        console.log('Car start');
    }
    stop(){
        console.log("Car stoped")
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
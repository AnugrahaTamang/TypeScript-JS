/*Type Narrowing: Type narrowing is the process of refining a variables
type within a conditional block of code. This allows you to write more precise
and type-safe code */
/*TypeScript provides several mechanisms for narrowing types
-Type guards:Type guards are mechanisms that help typescript understand and narrow
down the types more precisely. One common type guard is the typeof operator.
-The instanceof operator: The instanceof operator is another type guard in typesript
that allows you to check whether an object is an instace of a particular class or constructor function.
-intersection types: Intersection types in typescript allow you to combine multiple
types into a single type. The resulting type will have all the properties of each
individual type. you create intersection types using the & operator.
-Descriminated unions
 */

//Example of type guard
type myType = string | number;
function exampleFunction(value: myType): void{
    if(typeof value == "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
}
exampleFunction("Hello");
exampleFunction(12);

//Instanceof Example
class Dog{
    bark(): void{
        console.log("woof!");
    }
}
class Cat{
    meow(): void{
        console.log("meow!");
    }
}
function animalSound(animal: Dog | Cat): void{
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);

//Intersection Example:
type Employee = {
    id: number;
    name: string;
}
type Manager = {
    department: string;
    role: string;
}
type ManagerWithEmpleyee = Employee & Manager;
const managerone: ManagerWithEmpleyee = {
    id: 123,
    name: "joohn doe",
    department: "engineering",
    role: "Team lead",
};
console.log(managerone.id);
console.log(managerone.name)
console.log(managerone.department)
console.log(managerone.role)
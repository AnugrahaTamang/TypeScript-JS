/*Declaration merging: Once an interface is declared, it cannot be directly modified.
However, Typescript allows what is informally referred to as "declaration merging" or
"interface extension" which is often misconstructed as "re-opening".

Declaration merging in Typescript refers to the ability to extend or augment an
existing declaration, including interfaces. This can be useful when you want to
add new properties or methods to an existing interface without modifying the original declaration.*/
//Original interface
interface Car{
    brand: string;
    start(): void;
}
//Declaration merging (interface extension)
interface Car{
    model: string;
    stop(): void;
}
//Usage of the extended interface
const myCar: Car = {
    brand: "Tesla",
    model: "camry",
    start(){
        console.log("car started");
    },
    stop(){
        console.log("Car stoped")
    }
};
console.log(myCar)
myCar.start();

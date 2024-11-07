//function annotations parameter
//Example of regular function
function addOne(num: number){
    return num + 1;
}
console.log(addOne(3));


//arrow function annotation
const addTwo = (num: number) =>{
    console.log(num - 2)
}
addTwo(23);

//Default parameter in function

function addThree(name: string = "Anugraha", lname:string){
    console.log(`My name is ${name} ${lname}`);
}
addThree("Ramit", "Tamang");

//Return Annotations(Regular)

function double1(num: number): number{
    return num + num + num; // you can pass how many you want to pass
}
console.log(double1(3))

const double2 = (x: number): number => {
    return x * x;
}
console.log(double2(3))

// Void Annotations: it's doesn't return the any value
function printMessage(message: string): void {
    console.log(`My name is ${message}`)
}
printMessage("Amisha Tamang")
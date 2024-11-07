/*Any Type: Typescript has a special any type that can be used to represent any type.
When a variable is annotated with the any type, Typescript will allow it to have
any value and disable all type checking for that variable and its properties.
*/
let color: any = "crimson";
console.log(color)
color = 20;
console.log(color)
color = true;
console.log(color)


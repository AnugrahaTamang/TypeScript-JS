/*Generics: In typescript generics allow you to create reusable components that
can work with variety of types. Generics make it possible for you to define functions,
classes and interfaces that can work with different data types without having to duplicate code. */
//Regular function
const printString = (n: string) => console.log(n);
const PrintNum = (n: number) => console.log(n);
const printBool = (n: boolean) => console.log(n);

console.log(printString("Hello"));
console.log(PrintNum(23));
console.log(printBool(true));

//Generics:
function printInfo <T>(x: T): T{
    return x;
}

const str = printInfo<string>("Hello");
const num = printInfo<number>(2);
const bool = printInfo<boolean>(true);
console.log(str)
console.log(num)
console.log(bool)

//Example three
function uniqueDataTypesFunc<Type>(
    item: Type,
    defaultValue: Type
): [Type, Type]{
    return [item, defaultValue];
}

const numone = uniqueDataTypesFunc<number>(23, 23);
const strone = uniqueDataTypesFunc<string>("Hello", "world");
console.log(numone);
console.log(strone);

//Example four
function reversePair<T, U>(value1: T, value2: U): [T, U]{
    return [value1, value2];
}
const reversePairOne = reversePair("Hello", 20);
console.log(reversePairOne);

//Example five
class Box<T>{
    private content: T;
    constructor(initialContent: T){
        this.content = initialContent;
    }
    getContent(): T{
        return this.content;
    }
    setContent(newContent: T): void{
        this.content = newContent;
    }
}
const numberBox = new Box<number>(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
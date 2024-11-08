/*Access Modifiers: In typescript, you can use access modifiers to control
the visibility of class members(properties and methods). Access modifiers determine
the ways in which class members can be accessed from within and outside the class */
//There are three types of access modifiers in typescript (public, private, protected)
//Public: Members marked as public can be accessed from anywhere, both inside and outside the class
//Private: Members marked as private can only be accessed from within the class they are defined in.
//Protected:  Members marked as protected can be accessed from within the class they are defined in, as well as any subclassed that extend the class.


class Human{
    private first: string;
    public last: string;
    protected age: number;
    constructor(first: string, last: string, age: number){
        this.first = first;
        this.last = last;
        this.age = age;
    }
    getName(): string{
        return `${this.first} ${this.last} Age: ${this.age}`;
    }
}
class Person extends Human{
    constructor(first: string, last: string, age: number){
        super(first, last, age);
    }
}
const obj = new Person("Anugraah", "Tamang", 22);
console.log(obj);

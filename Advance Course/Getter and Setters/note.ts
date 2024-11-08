/* Getters and setters are used to access and modify class properties. Getters and setters
allow you to define a property in a class that looks like a simple variable
from the outside but internally has additional logic for getting and setting the value.*/

class Myclass{
    private _MyProperty: number = 0;
    get myProperty(): number{
        return this._MyProperty;
    }
    set myProperty(value: number){
        this._MyProperty = value;
    }
}

const myInstace = new Myclass();
console.log(`Current value: ${myInstace.myProperty}`)
myInstace.myProperty = 10
console.log(`Current value: ${myInstace.myProperty}`)
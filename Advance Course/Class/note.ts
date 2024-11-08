/*Class Properties Annotations: You can annotate class properties with a type.
This allows you to define the data type of the property and ensure that it is 
always consistend. */
class person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
const obj = new person("anugraha", 22);
console.log(obj)


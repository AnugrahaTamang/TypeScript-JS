/*Never: The never keyword is used to indicate that a function will not return
anything, or that a variable can never have a value. The never type is useful for indicating
that certain values are impossible. It can help catch errors at compile time instead of runtime */

//Never: 1. A function that always throws an error. 2. A function that has an infinite loop. 3. A variable that can never have a value.
function throwError(msg: string): never {
    throw new Error(msg)
};

function infiniteLoop(): never {
    while(true);
};

let x: never; 
//Never: never keyword not return any value.
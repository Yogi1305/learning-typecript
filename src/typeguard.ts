// typenarrowing ,we narrow down the type of a variable within a conditional block
function chai(kind: string | number) {
    if (typeof kind === "string") {
        // console.log("kind is a string");
        console.log(`user ordered ${kind}`);
    } else {
        console.log("user ordered a number of chai options: " + kind);
    }
}
chai("masala chai");
chai(123);

// truthyness narrowing
function printAll(strs?: string) {
    if (strs) {
        console.log(strs.toUpperCase());
    }
    return "no string provided";
}
printAll("hello");
printAll();

type Fish = { type:string; roasted:boolean };
type Bird = { type:"kite"; flyingSpeed:number };
type Animal = Fish | Bird;
function getFood(animal: Animal): string {
    if ("roasted" in animal) {
        return `fish food with roasted: ${animal.roasted}`;
    } else {
        return `bird food with flying speed: ${animal.flyingSpeed}`;
    }
}

console.log(getFood({ type: "fish", roasted: true }));
console.log(getFood({ type: "kite", flyingSpeed: 20 }));

// forceful annotation, this is not recommended as it can lead to runtime errors if the type is not what we expect ,but it can be useful in some cases when we are sure about the type of the variable and we want to tell the compiler about it,and use methods or properties specific to that type

// this called as type assertion or type casting

function getFood2(animal: Animal): string {
    if (animal.type === "fish") {
        return `fish food with roasted: ${(animal as Fish).roasted}`;
    } else {
        return `bird food with flying speed: ${(animal as Bird).flyingSpeed}`;
    }
}

console.log(getFood2({ type: "fish", roasted: true }));
console.log(getFood2({ type: "kite", flyingSpeed: 20 }));


// any vs unknown
let anyVar: any;
anyVar = 123;
anyVar = "hello";
anyVar = true;
console.log(anyVar.toUpperCase()); // no error at compile time,but will throw error at runtime if anyVar is not a string

let unknownVar: unknown;
unknownVar = 123;
unknownVar = "hello";
unknownVar = true;
console.log(unknownVar.toUpperCase());
 // error at compile time,unknownVar is of type unknown

if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase()); // no error at compile time,as we have narrowed down the type of unknownVar to string
}   else {
    console.log("unknownVar is not a string");
}   

// never type
type Role = "admin" | "user" | "guest";

// if we add a new role to the Role type and forget to handle it in the getRole function, we will get a compile time error as the _exhaustiveCheck variable will be of type never and we cannot assign any value to it, this is a useful feature of never type as it helps us to catch errors at compile time and ensures that we have handled all possible cases in our code

function getRole(role: Role) {
    switch (role) {
        case "admin":
            return "you are an admin";

        case "user":
            return "you are a user";
        case "guest":
            return "you are a guest";

        default:{
            const defaultrole=role;
            console.log("you have change Role but not handled it");
            
            return defaultrole;
        }
             // error if a new role is added to Role type and not handled here
    }
}
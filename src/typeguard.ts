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

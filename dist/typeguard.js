"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typenarrowing 
function chai(kind) {
    if (typeof kind === "string") {
        // console.log("kind is a string");
        console.log(`user ordered ${kind}`);
    }
    else {
        console.log("user ordered a number of chai options: " + kind);
    }
}
chai("masala chai");
chai(123);
//# sourceMappingURL=typeguard.js.map
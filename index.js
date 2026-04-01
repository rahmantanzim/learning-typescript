"use strict";
// TS is a programming language, its a super set of JS
// syntax is same
// tsc --init will create tsconfig.json file
Object.defineProperty(exports, "__esModule", { value: true });
let id = 3;
let name = "Tanzim";
let isGraduated = false;
//array
let ids = [1, 2, 3, 4, 5];
let idAny = true; // only be used in extreme scenerios
// array with strings
let strIds = ["1", "2", "3", "4", "5"];
// array with mixed types:
let mixedIds = [1, 'Tanzim', false];
const concatVals = (a, b) => {
    return a + b;
};
console.log(concatVals(1, 2));
const User = {
    id: 0,
    name: "Tanzim",
    age: 34,
    isGraduated: false
};
//# sourceMappingURL=index.js.map
/* Catch Use of Assignment Operator Instead of 
Equality Operator */

// A conditional will expext a comparison operator
// falsy values: false, 0, "", NaN, undefined, and null

let x = 1;
let y = 2;
if (x = y) {
    result = "x was just assigned the value of y"
} else {
    result = "This else branch is not reachable."
}

console.log(result, x, y);
// x was just assigned the value of y 2 2

/* Fix the condition so the program run the right branch, and 
the appropriate value is assigned to result. */

let x = 7;
let y = 9;
let result = "to come";

if (x = y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);
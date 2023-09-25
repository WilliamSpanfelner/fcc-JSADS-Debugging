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
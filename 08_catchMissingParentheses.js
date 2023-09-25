/* Catch Missing Open and Closing Parenthesis After
a Function Call */
/* Logging variable values to the console or their types 
and spotting the a variable is set to a function reference 
is a way of locating a potential error. */

function myFunction() {
    return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();

console.log(varOne, varTwo);
// [Function: myFunction] You rock!

/* Fix the code so the variable result is set to the value
returned from calling the function getNine. */
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);
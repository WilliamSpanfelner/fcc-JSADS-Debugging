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
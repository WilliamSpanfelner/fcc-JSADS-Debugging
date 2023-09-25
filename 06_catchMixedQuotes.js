// Catch Mixed Usage of Single and Double Quotes
// Mixing single and double quotes will cause syntax error.

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";  // ok
const quoteInString = "Goucho Marx once said 'Quote me as saying I was mis-quoted.'";  // ok
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it';  // not ok

// Escape the quotes inside the string with a backslash
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it';  // ok
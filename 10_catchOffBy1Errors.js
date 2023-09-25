// Catch Off By One Errors When Using Indexing

// Off By One Errors (OBOE)

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

/* Fix the two indexing errors in the following function so all
the numbers 1 through 5 are printed to the console. */

function countToFive() {
  let firstFive = '12345';
  let len = firstFive.length;
  //Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
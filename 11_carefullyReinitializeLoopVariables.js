// Use Caution When Reinitializing Variables Inside a Loop

/* the following function is supposed to create a two-
dimensional array with m rows and n columns of zeroes.
Unfortunately, it's not producing the expected output
because teh row variable isn't being reinitialized (set back
to an empty array) in the outer loop.  Fix the code so it
returns a correct 3x2 array of zeroes, which looks like
[[0, 0], [0, 0], [0, 0]]. */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes z zeroes into the 
            // current row to create the columns
            row.push(0);
            console.log(row, j);
        }
        // Pushes the current row, which 
        // now has n zeroes in it, to the array
        newArray.push(row);
        console.log(newArray, i)
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
//Generating an n x n identity matrix:

//Write a JavaScript function which returns the n rows by n columns identity matrix.


function identityMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i === j ? 1 : 0;
        }
    }
    return matrix;
}

const matrix = identityMatrix(3);
console.log(matrix); 

// Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
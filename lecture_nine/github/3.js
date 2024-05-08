//Generating all combinations of a string:

//Write a JavaScript function that returns a string that has letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.


function generateCombinations(str) {
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

const combinations = generateCombinations('dog');
console.log(combinations); 

// Output: 
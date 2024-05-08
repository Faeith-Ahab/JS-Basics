//Converting the first letter of each word to uppercase:

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}


const capitalized = capitalizeWords('the quick brown fox');
console.log(capitalized); 

// Output: 'The Quick Brown Fox'
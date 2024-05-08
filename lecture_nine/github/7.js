//Counting the number of vowels in a string:

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//Example string : 'The quick brown fox'
//Expected Output : 5


function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

const count = countVowels('The quick brown fox');
console.log(count); 

// Output: 5
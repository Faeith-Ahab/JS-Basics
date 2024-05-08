//Checking if a string is a palindrome:

//Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const result = isPalindrome("madam");
console.log(result); 

// Output:
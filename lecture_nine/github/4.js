//Sorting a string alphabetically:

//Write a JavaScript function that returns a string that has letters in alphabetical order. 
//Example string : 'webmaster' Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.



function sortString(str) {
    return str.split('').sort().join('');
}


const sorted = sortString('webmaster');
console.log(sorted); 

// Output: 'abeemrstw'9
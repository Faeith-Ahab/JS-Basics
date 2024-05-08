//indexof()

let text_1 = "hello world hello world!";
let index_1 = text_1.indexOf("hello");
console.log(index_1)




//lastindexof

let text_2 = "hello world hello world!";
let index_2 = text_2.lastIndexOf("hello");
console.log(index_2)




//match()

let text_3 = "The rain in SPAIN stays mainly in the plain";
let match_1 =text_3.match("ain");
console.log(match_1)

let match_2 =text_3.match(/ain/g);
// regular expression the g gets all the ain in the string, makes a global search but is case sensitive
console.log(match_2)
// gi gets all ains  regardless of the case
let match_3 = text_3.match(/ain/gi);
console.log(match_3)

// matchAll()
let text_4 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator_1 = text_4.matchAll(Cats);
console.log(Array.from(iterator_1))

const iterator_2 = text_4.matchAll(/Cats/gi);
console.log(Array.from(iterator_2))




//includes()

// includes is case sensitive
// Check if a string includes "world": starting at position zero

let text_5= "Hello world, welcome to the universe.";
text_5.includes("world"),
console.log(text_5.includes("world"))

// Check if a string includes "world". Starting at position 12
let text_6 = "Hello world, welcome to the universe.";
text_6.includes("world", 12);
console.log(text_6.includes("world", 12))




//search()

// let text = "Please locate where 'locate' occurs!";
// text.search("locate");
let text_7 = "Please locate where 'locate' occurs!";
let search=text_7.search(/locate/);
console.log(search)




//javascript interpretation
let firstName = "John"
let lastName = "Doe"
let text_8 = `Welcome ${firstName}, ${lastName}!`;
console.log(text_8)



//



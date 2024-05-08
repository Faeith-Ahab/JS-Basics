/*ARRAYS */

const cars_one = ["Saab", "Volvo", "BMW"];

let car1 = "Saab"; let car2 = "Volvo"; let car3 = "BMW";

console.log(cars_one);



//The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)


//The reverse() method reverses the elements in an array: 

const animals = ["cat", "dog", "pig", "sheep", "cow"];
animals.reverse();

console.log(animals)


//By combining sort() and reverse(), you can sort an array in descending order:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
fruits2.reverse();

console.log(fruits2)

//toSorted() method as a safe way to sort an array without altering the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.slice().sort(); // Use slice() to create a copy of the array before sorting

console.log(months);
console.log(sorted);

// toReversed method is a safe way to reverse an array without altering the original array.
const months2 = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months2.slice().reverse(); // Use slice() to create a copy of the array before reversing

console.log(months2);
console.log(reversed);


/*Loop through an arrays: Minimum and max method */



//Sorting an array in decending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)


const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b){return b - a});
console.log(points2)

//Sorting an Array in Random Order
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(){return 0.5 - Math.random()});
console.log(numbers)



//THE FISHER YATES METHOD
const numbers2 = [40, 100, 1, 5, 25, 10];
for (let i = numbers2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = numbers2[i];
  numbers2[i] = numbers2[j];
  numbers2[j] = k;

}

console.log(numbers2)
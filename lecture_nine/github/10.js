//  Finding the second lowest and second greatest numbers in an array:

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4


function findSecondNumbers(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const secondLowest = sortedArr[1];
    const secondGreatest = sortedArr[arr.length - 2];
    return [secondLowest, secondGreatest];
}


const numbers = [1, 2, 3, 4, 5];
const [secondLowest, secondGreatest] = findSecondNumbers(numbers);
console.log(secondLowest, secondGreatest); 

// Output: 2, 4
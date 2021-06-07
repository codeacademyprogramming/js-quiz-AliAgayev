/*
    1. Write an expression which selects every <p> element in the document (write in all ways you know)
*/
const pElement = Array.from(document.querySelectorAll('p'));
const pElement1 = document.getElementsByTagName('p');

/*
    2. Write an expression which selects every element with the wrapper class in the document (write in all ways you know)
*/
const wrapperElements = querySelectorAll('.wrapper');

/*
    3. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which only contains numbers can divide by two (with built in array methods)
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i])
    }
}


/*
    4. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which is multiplied versions of every element in the array(with built in array methods)
*/
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
}



/*
    5. Write a custom method which accepts an array and returns an array with all the values duplicated
    input: [1,2,3,4,5]
    expected output: [1,2,3,4,5,1,2,3,4,5]
*/
let arr3 = [1, 2, 3, 4, 5]
console.log(dublicated(arr3));

function dublicated(arr2) {
    let newArr2;
    return newArr2 = arr2.concat(arr2);
}

/*
    6. Write a custom method with name 'multiply' which can be invoked like the example below:
    multiply(2)(3)(5)
    expected output: 30
*/

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}


/*
    7. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array only contains numbers greater than 5
*/
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4.every(checked))

function checked(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            return true;
        }
        else {
            return false;
        }
    }
}

/*
    8. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array at least contains one element which divides by 2
*/
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr5.some(checkedArr))

function checkedArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return true;
        }

    }
}


/*
    9.  What will be the output of the following code?
        var Employee = {
            company: 'xyz'
        }
        var emp1 = Object.create(Employee);
        delete emp1.company
        console.log(emp1.company);

*/

//   NOTHING

/*
    10. I wrote a function, how can i know how many arguments provided to my function
*/

/*
    11. You are given an array like [1,2,3,4], how can you empty array? (write in )
    input: [1, 2, 3, 4]
    output: []
*/

let a = [1, 2, 3, 4];
for (let i = 0; i < a.length; i++) {

}
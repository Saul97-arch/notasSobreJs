/* ES6: Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array: */

//var arr = [6, 89, 3, 45];
//var maximus = Math.max.apply(null, arr); // returns 89

/* We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain. */


//const arra = [6, 89, 3, 45];
//const maximus = Math.max(...arr); // returns 89

/* ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:*/

//const spreaded = ...arr; // will throw a syntax error

/* Copy all contents of arr1 into another array arr2 using the spread operator. */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

//Another uses for spread operator

//Add the elements of an existing array into a new array

let done = ['Sleep', 42, 'Manga', 'Anime'];
let toDo = ['Wash my hands', 'Argue with my brother', 'Code'];
let ramdom = ['Big foot', true, ...done, 'Ahmed', 'Brazil']

//Concatenate
let things = [...done,'Anything', ...toDo];

console.log(things);
console.log(ramdom);


//Pass arguments to a function

const addThreeNumbers = (x, y, z) => x + y + z;

//If another arg is passed to the array it will be ignored, because in the function only call 3 params
let args = [2, 3, 5];

console.log(addThreeNumbers(...args));

/*About diference of spread and rest params
https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6*/



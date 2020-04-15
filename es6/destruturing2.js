/* ES6: Use Destructuring Assignment to Assign Variables from Arrays
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that: */

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

/* The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index: */

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


/* Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. */

let a = 8, b = 6;

[a, b] = [b, a];


/* ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below: */

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

/* Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array. */

/* Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted. */

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  //The same can be done as const[,,...arr] each comma is a variable.
  const [a,b,...arr] = list; 
  
  return arr;
}
const arr = removeFirstTwo(source);


/* ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
In some cases, you can destructure the object in a function argument itself.

Consider the code below: */

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
}

/* This effectively destructures the object sent into the function. This can also be done in-place: */

const profileUpdate = ({ name, age, nationality, location }) => {
    /* do something with these fields */
}

/* This removes some extra lines and makes our code look neat. This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function. */

/* Use destructuring assignment within the argument to the function half to send only max and min inside the function. */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
  
// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line
  



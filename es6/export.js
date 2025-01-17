/* ES6: Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.*/

export const add = (x, y) => {
  return x + y;
}

/* The above is a common way to export a single function, but you can achieve the same thing like this:*/
const add = (x, y) => {
  return x + y;
}

export { add };

/* When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this: */

export { add, subtract };
/* There are two string-related functions in the editor. Export both of them using the method of your choice. */


const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase()
}
  
export {uppercaseString, lowercaseString};



/* ES6: Create an Export Fallback with export default
In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default: */

// named function
export default function add(x, y) {
    return x + y;
}
  
// anonymous function
export default function(x, y) {
    return x + y;
}


/* ES6: Reuse JavaScript Code Using import
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file: */

import { add, subtract } from './math_functions.js';


/* Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way. */

/* You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js';
Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file. */


import { uppercaseString, lowercaseString } from './string_functions.js';  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");


/* ES6: Use * to Import Everything from a File
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory: */

import * as myMathModule from "./math_functions.js";

/* The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported: */


myMathModule.add(2,3);
myMathModule.subtract(5,3);

/* The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions. */

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


/* ES6: Import a Default Export
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it: */


import add from "./math_functions.js";


/* The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default. */


/* In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract. */

import subtract from "./math_functions.js"; 

subtract(7,4);

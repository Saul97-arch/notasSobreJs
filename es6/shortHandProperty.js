/* Consider the following code: */

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});



/* getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax: */

const getMousePosition = (x, y) => ({ x, y });


/* Use object property shorthand with object literals to create and return an object with name, age and gender properties. */


const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender
    };
};
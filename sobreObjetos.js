/* Basic JavaScript: Build JavaScript Objects
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings. */


/* Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array. */

//Um objeto abaixo e o que está dentro dele são as propriedades
var myDog = {
    "name": "Jonson",
    "legs": 4,
    "friends": ["Me", "My Friends", 42],
    "tails": 3
};


/* Basic JavaScript: Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2 

Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.*/


var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  
  // Only change code below this line
  
var hatValue = testObj.hat;      
var shirtValue = testObj.shirt;    


/* Basic JavaScript: Accessing Object Properties with Bracket Notation
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:


var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise

Note that property names with spaces in them must be in quotes (single or double).

Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
*/
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
 
  
var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"];    
  
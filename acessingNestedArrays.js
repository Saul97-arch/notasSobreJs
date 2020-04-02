/* Basic JavaScript: Accessing Nested Arrays
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:
 */
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy" <--repare como é acessado
ourPets[1].names[0]; // "Spot"

/* Nessa estrutura cada objeto é separado por vírgulas obj0 --> {}, {} <---obj1
veja que o nomo das propriedades coincidem, ou o valor key, já o valor da key que varia, desta maneira podemos iterar sobre essa sequência de dados*/

/* Retrieve the second tree from the variable myPlants using object dot and array bracket notation. */

var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
  
  // Only change code below this line
  
var secondTree = myPlants[1].list[1]; //segundo objeto e faço referencia a lista que é um array e referencio com bracket.
  
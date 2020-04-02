/*Link mostrando como implementar uma queue e stack no JS 
https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript 
.pop() --> retira o ultimo elemento
.shift() -- retira o primeiro elemento
.unshift(elemento) --> adiciona um ou mais elementos ao final do array
*/

function nextInLine(arr, item) {
    arr.push(item);  //primeiro adiciona um item no final do array
    return arr.shift(); //depois é retornado o array sem o primeiro item
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  
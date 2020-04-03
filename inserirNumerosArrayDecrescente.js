var myArray = [];

// Only change code below this line
//Insere os numeros de forma descrescente
//Maneira deselegante feita por mim:
/* var i = 0;
var cont = 5;
while(i <= 5){
  myArray.push(cont);
  i++;
  cont--;
} */

//Mais elegante proposta pelo freecodecamp
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);
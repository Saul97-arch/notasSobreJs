/* O primeiro array [1, 2, 3] é índice 0, o próximo é índice 1 e so on, no array abaixo temos arrays aninhados que o índice varia de 0 até 3, os elementos 13 e 14 ocupam os índices 4 e 5 respectivamente. */

let array = [
    [1, 2, 3], //index 0
    [4, 5, 6], //index 1
    [7, 8, 9], //index 2
    [[10, 11, 12], 13, 14]]; //index 3

console.log(array[3][0][2]); //Retorna 12, acessa o index 3, o primeiro item dele e o terceiro item deste array aninhado.
console.log(array[3][1]);    //Retorna 13 que é o segundo item do array aninhado que corresponde ao indice 3.
/*Como acessar os elementos dentro dos arrays aninhados? É bem intuitivo até, por exemplo array[1][0] está acessando o segundo item do array principal que é um array aninhado e a segunda bracket com valor 0 acessa o primeiro item deste array.  */

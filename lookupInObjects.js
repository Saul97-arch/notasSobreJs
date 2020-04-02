/* 
    Todo esse código abaixo pode ser reescrito:
function phoneticLookup(val) {
    
    var result = " ";
    
    switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  } 
  return result;
}
*/

/* Desta maneira */


// Setup
function phoneticLookup(val) {
    var result = "";
    
    var lookup = {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank"
    };
    result = lookup[val];
    
    return result;
  }
  
console.log(phoneticLookup("charlie")); //Lembrando que o valor do retorno da função pode ser guardado em uma variável para poder ser tratado posteriormente.
  


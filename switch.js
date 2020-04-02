function caseInSwitch(val) {
    var answer = "";
   
    switch(val){
      case 1:
        answer = "alpha"; //Uma atribuição ou operação pode ser feita, tudo em relação ao mesmo valor
        break
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;
}
  
caseInSwitch(1); // chamada da função


//Com default

function switchOfStuff(val) {
    var answer = "";
   
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
  
  return answer;
}
  
switchOfStuff(1);
 
//Com um range de valores, um intervalo.
function sequentialSizes(val) {
  var answer = "";
  
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

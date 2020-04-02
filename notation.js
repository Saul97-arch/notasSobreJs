/* Aqui é um dashboard improvisado, crie objetos aninhados em um objeto e objetos aninhados em um vetor e vá tentando acessar os valores dos mesmos, modificar e tudo mais. */
let object = {
    "Saul":{
    age: 23,
    name: "Saul",
    "Martial art": "Capoeira",
    religion: "Catolic",
    "Political Positioning": "Liberal right",
    "5": "Is my prefered number",
    42: "It's the meaning of all?",
    "Hobbies": [
        "mock his brutah",
        "Vapor Wave",
        [1997, "yearh of bright"]
    ]
    },
    Angelo:{
        age: 23,
    name: "Angelo",
    "Martial art": "BJJ",
    religion: "Athean",
    "Political Positioning": "Ortodox right",
    24: "The best age!",
    42: "Is 6 time 7 right?",
    "Hobbies": [
        "mock his brutah",
        "Violin",
        [1995, "Year of birth"],
        "Try to find someone to hear his speculations"
    ]
    }
}

var theNumba = 42; //Declarando uma variável e referenciando ela com . no objeto eu adiciono uma variavel.
console.log(object["Saul"]["Political Positioning"].length); //Sai o tamanho do valor da key
object.Saul["Martial art"] = "Muay Thay"; //Essa atribuição vale para depois da linha 13 vale lembrar!
object.Saul.theNumba = "Maybe is 7 times 6";  //Aqui adicionou uma propriedade com nome theNumba de valor da string!
object.Saul[theNumba] = "Maybe is 7 times 6"; //Aqui trocou o conteudo da chave de valor 42 para a string!
//A bracket aceita religon entre aspas, você tem que especificar como string, já pra numero é só jogar e ser feliz!
console.log(object.Saul['religion']);
console.log(object.Angelo.Hobbies[2][0]);
/* console.log(object); */



object.Saul.push("");

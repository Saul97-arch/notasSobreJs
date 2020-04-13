var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": [" rid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
/* Soluções: */
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
        /* esse método no return funciona aparentemente só com objetos */
        return contacts[i][prop] || "No such property"; 
      }
    }
    return "No such contact";
}

/* function lookUpProfile(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
} */

/* function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else return "No such property";
      }
    }
    return "No such contact";
}
 */

//Pra retornar se o contato existe ou não o for tem que percorrer todo o vetor, por isso o return que diz que não existe tal contato é fora do "for"

var data = lookUpProfile("Akira", "lhama");

console.log(data);




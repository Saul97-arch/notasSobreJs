var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
  
console.log(collection); //colection[id] 

//Resolução inicial
/* function updateRecords(id, prop, value) {
    if (value === "") {
      delete collection[id][prop];
    } else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }
    
    return collection;
} */


/* console.log(updateRecords(5439, "id", "properties")); */

//Vale a pena conferir
/* function updateRecords(id, prop, value) {
  
  if(prop !== 'tracks' && value !== "") {
    collection[id][prop] = value;
  }
  
  if(prop === 'tracks' && collection[id][prop] === undefined) {
    collection[id][prop] = [];
  }
  
  if(prop === 'tracks') {
    let track = collection[id][prop];
    track.push(value)
  }
  
  if(value === "") {
    delete collection[id][prop]
  }
  
  console.log(collection)
  return collection;
}

updateRecords(5439, "artist", "ABBA"); */

//Solução mais bem votada!
/* function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else {
    if (prop !== 'tracks') {
      collection[id][prop] = value;
    } else {
      collection[id].hasOwnProperty('tracks') ? collection[id].tracks.push(value) : collection[id].tracks = [value];
    }
  }
  return collection;
} */

// Alter values below to test your code
/* updateRecords(5439, "artist", "ABBA"); */
/* updateRecords(5439, "tracks", "Take a Chance on Me"); */
/* updateRecords(2468, "tracks", "Free"); */

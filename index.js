//Write a function findMatchig(), this function takes 2 parameters, an array with the drivers and a string, and returns the list with the drivers in a string
function findMatching(drivers, string){
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
    );
}
//
function fuzzyMatch(drivers,string) {
   return drivers.filter(
    (possibleMatch) =>
    possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 
   );
    }
    //
function matchName(drivers,string){
    return drivers.filter((record) => record.name === string);
}



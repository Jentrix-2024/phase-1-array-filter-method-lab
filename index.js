// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name) {
   return drivers.filter(
    (possibleMatch)=>possibleMatch.toLowerCase() === name.toLowerCase()
   )
    }
  function fuzzyMatch(drivers,test){
    return drivers.filter(
(possibleMatch)=>possibleMatch.toLowerCase().indexOf(test.toLowerCase())===0);
    
  }
  function matchName(drivers,searchName){
    return drivers.filter((record)=>record.name===searchName);
  }
  
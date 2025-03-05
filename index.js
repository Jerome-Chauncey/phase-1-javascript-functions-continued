function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
   
}

console.log(saturdayFun());
console.log(saturdayFun("sleep"))
console.log(saturdayFun("game"))



function mondayWork (toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`
}
console.log(mondayWork());
console.log(mondayWork("dance"));


function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`; 
    }
}

const excitement = wrapAdjective("&&");
console.log(excitement("an Aries"));



// This Saturday, I want to roller-skate!
// This Saturday, I want to sleep!
// This Saturday, I want to game!
// This Monday, I will go to the office.
// This Monday, I will dance.
// You are &&an Aries&&!

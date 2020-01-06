"use strict";
function tellFortune(children,partner,location,job){
    let ind1 = Math.floor(Math.random() * 5);
    let ind2 = Math.floor(Math.random() * 5);
    let ind3 = Math.floor(Math.random() * 5);
    let ind4 = Math.floor(Math.random() * 5);
    return "You will be a " + job[ind4] + " in " + location[ind3] + ", and married to " + partner[ind2] + " with " + children[ind1] + " kids."
}

let numChildren = [2,1,0,4,9];
let partnerNames = ["Sindy", "Mary", "Bob", "Susanna", "Jesica"];
let locations = ["Mars", "Jupiter", "Jungle", "Hawaii", "Athens"];
let jobs = ["Doctor", "Teacher", "Striper", "Gamer", "Unemployed"];

console.log(tellFortune(numChildren,partnerNames,locations,jobs));

"use strict";
function giveCompliment(name) {
    let compInd = Math.floor(Math.random() * 10); 
    let compliments = ["great","awesome","beautiful","strong","smart","genius","nice","cute","handsome","funny"];
    return "You are " + compliments[compInd] + ", " + name + "!"
}

console.log(giveCompliment("Mike"));
console.log(giveCompliment("Mike"));
console.log(giveCompliment("Mike"));
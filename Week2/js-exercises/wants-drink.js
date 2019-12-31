"use strict";
let drinkTray = [];
const drinkTypes = ["cola","lemonade","water"];
let typeIndex = 0;

function checkForTwo (drink){
    return drink == drinkTypes[typeIndex]
}

for (let i = 0; i < 5; i++){
    drinkTray.push(drinkTypes[typeIndex]);
    if (drinkTray.filter(checkForTwo).length == 2){
        typeIndex += 1;
    }   
}
console.log("Hey guys, I brought a " + drinkTray[0] + ", " + drinkTray[1] + ", " + drinkTray[2] + ", " + drinkTray[3] + ", " + drinkTray[4] + "!");

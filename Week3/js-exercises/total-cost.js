"use strict";
function calculateTotalPrice(partyThings){
    let bill = 0;
    for (let key in partyThings){
        bill += partyThings[key];
    }
    return "The total price is " + bill.toFixed(2) + "$.";
}

let cartForParty = {
    beers : 5.25,
    chips : 7.22,
    wine : 6.48,
    cake : 9.17,
    ballons : 3.2
}

console.log(calculateTotalPrice(cartForParty));
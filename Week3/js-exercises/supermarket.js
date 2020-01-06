"use strict";
function addToShoppingCart(groceryItem){
shoppings.push(groceryItem);
if (shoppings.length > 3){
    shoppings.shift();
}
return shoppings;
}

let shoppings = ["bananas","milk"];

addToShoppingCart("onios");
console.log(shoppings);

addToShoppingCart("potatoes");
console.log(shoppings);

addToShoppingCart("oranges");
console.log(shoppings);
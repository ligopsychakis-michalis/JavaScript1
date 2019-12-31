"use strict";
let myMealRecipe = {
    title : "Brunch",
    servings : 4,
    ingredients : ["eggs","bacon","cake","milk","orange juice"]
}
for (let key in myMealRecipe){
    if (myMealRecipe[key] == myMealRecipe.title){ 
        console.log("Meal name: " + myMealRecipe[key])
    }else if (myMealRecipe[key] == myMealRecipe.servings){
        console.log("Serves: " + myMealRecipe[key])
    }else {
        console.log("Ingredients: " + myMealRecipe[key])
    }
}

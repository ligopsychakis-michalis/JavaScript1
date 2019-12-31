"use strict";
let book1 = {
    title : "The Great Gatsby",
    author : "F.Scott Fitzgerald" ,
    alreadyReady : true 
};
let book2 = {
    title : "Moby Dick",
    author : "Herman Melville",
    alreadyRead : false
};
let book3 = {
    title : "War and Peace",
    author : "Leo Tolstoy",
    alreadyRead : true
};
let myBooks = [book1,book2,book3];

for (let i of myBooks){
    console.log(i.title + " by " + i.author);
    if (i.alreadyRead == true){
        console.log("You already read " + "\"" + i.title + "\"");
    }else{
        console.log("You still nead to read " + "\"" + i.title + "\"");
    }
    console.log("");
}

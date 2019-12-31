"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
while (myString.indexOf(",") >= 0){
    myString = myString.replace(","," ");
}
console.log(myString);
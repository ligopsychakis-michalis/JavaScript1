"use strict";

function creditCardValidator(password){
    let no = "Password " + password + " is denied.";
    let yes = "Password " + password + " is accepted.";
    let result = "";
    let passStr = password.toString();   //it's a string
    let passArr = passStr.split("");    //it's an array
    let passArrSum = passArr.reduce((a,b) => {return parseInt(a)+parseInt(b)});  //it's a number
    let passArrDiff = passArr.filter(dig => dig == passArr[0]);   //it's an array

    for (let i = 0; i < passArr.length; i++){    //check if all digit are numbers
        if (isNaN(passArr[i]) == true){
            result = no + "\nUse only numbers!";
            break;
        } 
    }
    if (result == ""){
        if (passArr.length != 16){     //check if there are 16 digits
            result = no + "\nIt must be 16 numbers!";
        }else if (passArr[passArr.length - 1] % 2 != 0){   //check if last digit is even
            result = no + "\nLast number must be even!";
        }else if (passArrSum <= 16){    //check if the sum of digits is > 16
            result = no + "\nThe sum of numbers must be greater than 16!";
        }else if (passArrDiff.length == 16){    //check if there are at least two different digits
            result = no + "\nUse at least two different numbers!";
        }else{
            result = yes;
        }
    }
    return result;
}

console.log(creditCardValidator(1827625347803724));








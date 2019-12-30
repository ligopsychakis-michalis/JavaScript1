let screen = document.getElementById("screen");
let C = document.getElementById("C");
let back = document.getElementById("back");
let devide = document.getElementById("devide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multi = document.getElementById("multi");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let minus = document.getElementById("minus");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let plus = document.getElementById("plus");
let zero = document.getElementById("zero");
let dec = document.getElementById("dec");
let equal = document.getElementById("equal");

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}

let choose = [C,back,devide,seven,eight,nine,multi,four,five,
    six,minus,one,two,three,plus,zero,dec,equal]

let result = 0;
let value2 = 0;
let operator = "";
let resultShowed = false;

for (let i = 0; i < choose.length; i++){
    function playSound(){
        var sound = document.getElementById("audio");
        sound.play();
    }    
    choose[i].onclick = function(){
        if (screen.innerHTML === "0"){
            screen.innerHTML = "";
        }   
        if (choose[i] == C){
            screen.innerHTML = "0";
            result = 0;
            value2 = 0; 
        // }else if (choose[i] == back) {
        //     screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1);
        //     if (screen.innerHTML.length == 0){
        //         screen.innerHTML = "0";
        //     }
        }else if (choose[i] == dec && screen.innerHTML.indexOf(".") > -1){
            //there is already a decimal symbol
        }else if (choose[i] == plus){
            result = parseFloat(screen.innerHTML);
            screen.innerHTML = "+";
            operator = plus.innerHTML;
        }else if (choose[i] == minus){
            result = parseFloat(screen.innerHTML);
            screen.innerHTML = "-";
            operator = minus.innerHTML;
        }else if (choose[i] == multi){
            result = parseFloat(screen.innerHTML);
            screen.innerHTML = "x";
            operator = multi.innerHTML;
        }else if (choose[i] == devide){
            result = parseFloat(screen.innerHTML);
            screen.innerHTML = "/";
            operator = devide.innerHTML;
        }else if (choose[i] == equal){
            value2 = parseFloat(screen.innerHTML)
            if (isNaN(result)){
                result = 0;
            }
            if (isNaN(value2)){
                value2 = 0;
            }
            if (operator == plus.innerHTML){
                result += value2;
            }else if(operator == minus.innerHTML){
                result -= value2;
            }else if(operator == multi.innerHTML){
                result *= value2;
            }else if(operator == devide.innerHTML){
                result /= value2;
            }
            screen.innerHTML = result.toString();
            result = 0;
            value2 = 0;
            operator = "";
            resultShowed = true;   
        }else if (choose[i] == back) {
            screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1);
            if (screen.innerHTML.length == 0 || resultShowed === true){
                screen.innerHTML = "0";
            }
        }else if (screen.innerHTML == plus.innerHTML || screen.innerHTML == minus.innerHTML
            || screen.innerHTML == devide.innerHTML || screen.innerHTML == multi.innerHTML){
            screen.innerHTML = choose[i].innerHTML;
        }else if (resultShowed === true){
            screen.innerHTML = "0";
            resultShowed = false;    
        }else{
            screen.innerHTML += choose[i].innerHTML;
        }
    }           
};
const buttons = document.querySelector(".keyboard");
const screen = document.querySelector(".screen");
let arr = [];
let symb = true;

//event: click button
buttons.addEventListener("click", e => {
  if(e.target.classList.contains("num")){
    if(screen.innerText != "/" && screen.innerText != "X" && screen.innerText != "+" && screen.innerText != "-"){
      screen.innerText += e.target.innerText;
    }else{ 
      screen.innerText = e.target.innerText;
    }
    symb = false;
  };  
  if(e.target.innerText == "C"){
    screen.innerText = "";
    arr = [];
    symb = true;
  };
  if(e.target.innerText == "<="){
    screen.innerText = screen.innerText.slice(0,screen.innerText.length-1);
  };
  if(e.target.classList.contains("symbol")){
    if(symb == false){
      arr.push(screen.innerText);
      computation();
      arr.push(e.target.innerText);
      screen.innerText = e.target.innerText;
      symb = true;
    };  
  };
  if(e.target.id == "equal"){
    arr.push(screen.innerText);
    computation();
    screen.innerText = arr[0];
    arr = [];
  };
});   



function computation(){
  if (arr.length == 3){
    if(arr[1] == "+"){
      arr[0] = parseFloat(arr[0]) + parseFloat(arr[2]);
    }else if(arr[1] == "-") {
      arr[0] = parseFloat(arr[0]) - parseFloat(arr[2]);
    }else if(arr[1] == "X") {
      arr[0] = parseFloat(arr[0]) * parseFloat(arr[2]);
    }else if(arr[1] == "/") {
      arr[0] = parseFloat(arr[0]) / parseFloat(arr[2]);
    }; 
    arr.pop();
    arr.pop();
    symb = false;
    return;
  }  
}
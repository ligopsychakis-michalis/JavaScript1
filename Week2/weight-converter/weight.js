const grams = document.getElementById("grams");
const kilograms = document.getElementById("kilogramsOutput");
const pounds = document.getElementById("poundsOutput");
const ounces = document.getElementById("ouncesOutput");

grams.onclick = function(){
    document.getElementsByClassName("card")[0].className = "card bg-primary text-left mb-2 visible";
    document.getElementsByClassName("card")[1].className = "card bg-success text-left mb-2 visible";
    document.getElementsByClassName("card")[2].className = "card bg-danger text-left mb-2 visible";
}

grams.addEventListener("input",function() {
    kilograms.innerHTML = parseFloat(grams.value) * 0.001;
    pounds.innerHTML = (parseFloat(grams.value) * 0.00220462262).toFixed(4);
    ounces.innerHTML = (parseFloat(grams.value) * 0.0352739619).toFixed(4);
    if (grams.value == "") {
        kilograms.innerHTML = "";
        pounds.innerHTML = "";
        ounces.innerHTML = "";
    }
});


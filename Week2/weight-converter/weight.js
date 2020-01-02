const grams = document.getElementById("grams");
const kilograms = document.getElementById("kilogramsOutput");
const pounds = document.getElementById("poundsOutput");
const ounces = document.getElementById("ouncesOutput");

for (let i = 0; i < 3; i++){
    document.getElementsByClassName("card")[i].style.visibility = "hidden";
}

grams.addEventListener("input",function() {
    for (let i = 0; i < 3; i++){
        document.getElementsByClassName("card")[i].style.visibility = "visible";
    }
    kilograms.innerHTML = parseFloat(grams.value) * 0.001;
    pounds.innerHTML = (parseFloat(grams.value) * 0.00220462262).toFixed(4);
    ounces.innerHTML = (parseFloat(grams.value) * 0.0352739619).toFixed(4);
    if (grams.value == "") {
        kilograms.innerHTML = "";
        pounds.innerHTML = "";
        ounces.innerHTML = "";
    }
});


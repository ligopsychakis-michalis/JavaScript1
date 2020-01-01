const celsius = document.getElementById("cels");
const fahrenheit = document.getElementById("fahr");
const kelvin = document.getElementById("kelv");


celsius.addEventListener("input",function() {
    fahrenheit.value = (parseFloat(celsius.value) * 1.8 + 32).toFixed(3);
    kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(3);
});

fahrenheit.addEventListener("input",function() {
    celsius.value = ((parseFloat(fahrenheit.value) - 32) / 1.8).toFixed(3);
    kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(3);
});

kelvin.addEventListener("input",function() {
    celsius.value =  (parseFloat(kelvin.value) - 273.15).toFixed(3);
    fahrenheit.value = (parseFloat(celsius.value) * 1.8 + 32).toFixed(3);
});



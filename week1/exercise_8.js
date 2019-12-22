console.log("EXERCISE_8");
var animal = "cat";
var age = 45;
var lie = false
var honesty = true
console.log("The value of my variable animal is: " + animal);
console.log("The value of my variable age is: " + age);
console.log("The value of my variable lie is: " + lie);
console.log("The value of my variable honesty is: " + honesty);
console.log('the typeof animal will be: string');
console.log('the typeof age will be: number');
console.log('the typeof lie will be: boolean');
console.log('the typeof honesty will be: boolean');
console.log(typeof(animal));
console.log(typeof(age));
console.log(typeof(lie));
console.log(typeof(honesty));
var typeTest = [animal,age,lie,honesty];
for (let i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        if (i === j || j > i) {

        }else if (typeof(typeTest[i])==typeof(typeTest[j])){
            console.log(typeTest[i] + " and " + typeTest[j] + " have SAME TYPE.")
        }else{
            console.log(typeTest[i] + " and " + typeTest[j] + " have NO SAME TYPE.")
        }

    }
}
console.log(" ");
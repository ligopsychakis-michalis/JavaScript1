"use strict"
//this function will give the grade of a student
function gradeCalculator(grade) {
    //show needs return a string
    let show;
    //with if will find out the grade of the student
    if (grade >= 90) {
        show = "You got an A " + "(" + grade.toString() + "%)!"
        return show;
    }else if (grade >= 80) {
        show = "You got a B " + "(" + grade.toString() + "%)!"
        return show;
    }else if (grade >= 70) {
        show = "You got a C " + "(" + grade.toString() + "%)!"
        return show;
    }else if (grade >= 60) {
        show = "You got a D " + "(" + grade.toString() + "%)!"
        return show;
    }else if (grade >= 50) {
        show = "You got an E " + "(" + grade.toString() + "%)!"
        return show;
    }else if (grade >= 0) {
        show = "You got a F " + "(" + grade.toString() + "%)!"
        return show;
    }
}


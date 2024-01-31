function Addition() { // addition function
    var add = 10 + 11;
    document.getElementById("Add").innerHTML = "10 + 11 = " + add;
}

function Subtraction() { // subtraction function
    var subtract = 40 - 19;
    document.getElementById("Sub").innerHTML = "40 - 19 = " + subtract;
}

function Multiplication() { // multiplication function
    var multiply = 7 * 3;
    document.getElementById("Multi").innerHTML = "7 * 3 = " + multiply;
}

function Division() { // division function
    var divide = 42 / 2;
    document.getElementById("Div").innerHTML = "42 / 2 = " + divide;
}

function Pemdas() { // a function that utilizes all operators
    var expression = (30 + 30) * 2 / 3 - 19;
    document.getElementById("Expr").innerHTML = "30 plus 30, times 2, divided by 3, subtracted by 5 equals " + expression;
}

function Modulus_operator() { // modulus function that uses the %(divison) symbol and returns the remainder
    var simple_math = 65 % 3;
    document.getElementById("Modu").innerHTML = "When you divide 65 by 3 you have a remainder of: " + simple_math;
}

function Negation_operator() { // turns the value into a negative
    var X = 21;
    document.getElementById("Math").innerHTML = -X;
}

var D = 20; // Increment Operator - increases the value by 1
D++;
document.write(D);

document.write("<br>")

var S = 21; // Decrement Operator - decreases the value by 1
S--;
document.write(S);

window.alert(Math.random() * 100); // picks a random number between 0 & 100
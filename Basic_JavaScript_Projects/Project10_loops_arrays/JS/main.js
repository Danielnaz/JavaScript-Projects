function while_loop() { // while (blank) is occurring do (blank)
    var digit = "";
    var X = 1; // setting X equal to 1
    while (X < 11) { // while x is less than 11 add 1
        digit += X + "<br>"; // then return digit until x is not
        X++; // less than 11
    }
    document.getElementById("loop").innerHTML = digit;
}

var names = ["Daniel", "Sierra", "Rya", "Natsu", "Jin", "Baki"];
var content = "";
var Y;
function for_loop() { // the difference between the "for" and "while" loops is that
    for (Y = 0; Y < names.length; Y++) { // the for loop is used when the number of iterations are known
    content += names[Y] + "<br>";
    }
    document.getElementById("loop2").innerHTML = content;
}

function array_function() { // this is an array function
    var element_bending = []; // the 0 to 3 are the indexes (position in array)
    element_bending[0] = "fire";
    element_bending[1] = "water";
    element_bending[2] = "earth";
    element_bending[3] = "air";
    document.getElementById("array").innerHTML = "It is a fact that " + // this is displaying are string of text in combination
        element_bending[3] + " bending is the best element to bend."; // with one of the indexes
}

function constant_function() {
    const musical_instr = {type:"guitar", brand:"fender", color:"black"};
    musical_instr.color = "blue";
    musical_instr.price = "$900";
    document.getElementById("constant").innerHTML = "the cost of the " +
        musical_instr.type + " was " + musical_instr.price;
}

var D = 21;
document.write(D);
{
    let D = 20;
    document.write("<br>" + D);
}
document.write("<br>" + D);

let x = return_Function(7, 3); 
document.getElementById("return").innerHTML = x; 

function return_Function(a, b) { // this is a "return" function that returns(displays) the product
  return a * b;   
}

let car = { // this is an object "car" with its properties and can also have methods
    make: "Acura ",
    model: "TLX ",
    year: "2024 ",
    color: "Urban Gray Pearl ",
    package: "Type S ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + 
        this.model + this.package;
    }
}
document.getElementById("car_object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; } // the "break" statement stops the loop when the specified condition has been met
  text += "Number " + i + "<br>";
}

document.getElementById("break").innerHTML = text;

let text2 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; } // the "continue" statement skips an iteration in the loop
  text2 += "Number " + i + "<br>"; // if a specified condition occurs
}
document.getElementById("continue").innerHTML = text2;
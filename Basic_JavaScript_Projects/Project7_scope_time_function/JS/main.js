var X = 10;
function Add_numbers_1() {
    document.write(11 + X + "<br>"); // this is a function that has a scope variable of "Global"
}                                    // this means that the function is using a variable outside of its own function
function Add_numbers_2() {           // the variable in this case would be "X"
    document.write(X + 10 + "<br>");
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3() {  // this is a function that has a scope variable of "Local"
    var Y = 10;             // this means that only the function that has the variable written inside of it can use it
    document.write(11 + Y); // if you tried accessing this variable with another function it will not work 
}                           // the variable in this case is "Y"
function Add_numbers_4() {
    document.write(Y + 10);
}
Add_numbers_3();
Add_numbers_4();



function Add_numbers_5() {
    var Z = 10;
    console.log(11 + Z);
}
function Add_numbers_6() { // this function is the same as above but uses the "console.log()" method to debug and find whats wrong with the code
    console.log(Z + 10);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"; // this function utilizes the "if" and "else" statements
    }                                                                    // this basically means it is trying to find the true or false to the function
    else {                                                               // if the first statement (if) is true i.e less than 18 then the first statement will display
        document.getElementById("Greeting").innerHTML = "Sleep well.";   // but if its false i.e greater than 18 then the 2nd statement will display (else)
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // this function is the same as above but with 3 statements instead (if, else if, and else)
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
}
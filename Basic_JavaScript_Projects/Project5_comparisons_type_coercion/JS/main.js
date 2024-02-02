document.write(typeof "Word"); // gives the data type of a variable - in this case "Word" is the data type "String" and will display String

document.write("<br>")

document.write(typeof 21); // same applies here - 21 is the data type number

document.write("<br>")

document.write("2" + 1);

function myFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}

//document.getElementById("Test2").innerHTML = isNaN('This is a string');

//document.getElementById("Test3").innerHTML = isNaN('007');

document.write("<br>")

document.write(2E310); // displays infinity because the JavaScript cant handle a larger floating point number

document.write("<br>")

document.write(-3E310); // same as before but instead is negative infinity

document.write("<br>")

document.write(10 > 2); // this is a true statement because 10 is greater than 2

document.write("<br>")

document.write(10 < 2); // this is a false statement because 10 is not less than 4

document.write("<br>")

document.write(10 == 10); // this is an equal tp statement - 10 is equal to 10 so the result is true

document.write("<br>")

X = 10;
Y = 10;
document.write(X === Y); // this checks if the data on the left is equal to the data on the right and will result in either true or false

document.write("<br>")

document.write(5 > 2 && 10 > 4); // "&&" is a "AND" operator and both statements must be true for it to display true, if not then it will display false

document.write("<br>")

document.write(5 > 10 || 10 > 4); // "||" is a "OR" operator, if one statement is true it will return true, if both are false it will return false

function notFunction() {
    document.getElementById("Not").innerHTML = !(20 > 10); // "!" is a "NOT" statement - it checks if the statement is true or false - 
    //so if the statement is "ACTUALLY" true or false it will return true, if the statement isnt "ACTUALLY" true or false, then it will return false because it lied
}
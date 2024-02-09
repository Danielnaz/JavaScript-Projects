function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this "; // this function utilizes the ".concat" method to concatenate multiple strings into one full sentence
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "I am thy chosen 1.";
    var section = sentence.slice(9, 17);                  // this function utilizes the ".slice" method
    document.getElementById("slice").innerHTML = section; // to isolate specified words from a string using their number locations
}

function uppercase_method() {
    let text = document.getElementById("uppercase").innerHTML;           // this function utilizes the ".toUpperCase"
    document.getElementById("uppercase").innerHTML = text.toUpperCase(); // method and turns the whole string into capital letters
}

function search_method() {
var text = "I am now 21, and I am thy chosen 1."; // this function utilizes the ".search" method
var position = text.search("21");                 // to search for a specified word in a string and returns the number location
document.getElementById("search").innerHTML = position;
}

function string_method() {
    var X = 21;
    document.getElementById("numbers_to_string").innerHTML = X.toString(); // this function utilizes the ".toString" method to return a number as a string
}

function precision_method() { // this function utilizes the ".toPrecision" method to format a number to a specified length
    var D = 2003;
    document.getElementById("precision").innerHTML = D.toPrecision(6);
}

function fixed_method() { // this function utilizes the ".toFixed" method to convert a number to a string and round it to the nearest whole number
var num = 20.8766736;
var N = num.toFixed();
document.getElementById("fixed").innerHTML = N;
}
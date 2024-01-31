function Myfunction() {
    var step1 = "Daniel just turned 21"
    document.getElementById("turned_21").innerHTML = step1;
}// This function displays a simple sentence 

function My2ndfunction() {
    var sentence = "Daniel turned 21 on";
    sentence += " January 1st, 2024.";
    document.getElementById("Concatenate").innerHTML = sentence; 
} //This function concatenates 2 separate sentences and uses the getElementById to display the text
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; // "?" is an ternary operator and is used to assign a value to a variable based on a condition
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // in this case, we have 2 values that will be assigned to the variable based on
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // what the user inputs - i.e. if they input anything less than 52(the condtion),
}                                                                       // the first value will be displayed and anything 52 or higher will display the 2nd value

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model; // this is the car object
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // the function "vehicle()" is an object constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // the "new" keyword creates objects (Jack, Emily, Erik) of the vehicle function
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");               // then we define the values for each make, model, year, and color
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count(); // this function consists of a nested function and in this case would be "PLus_one"
    function Count() {
        var Starting_point = 20;
        function PLus_one() {Starting_point += 1;}
        PLus_one();
        return Starting_point;
    }
}
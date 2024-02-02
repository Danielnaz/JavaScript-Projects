function myDictionary() { // this creates a dictionary
    var Person = {
        Name: "Daniel",
        Age: "21",
        Height: "5'5",
        Weight: "122 lbs",
        Ethnicity: "Puerto Rican"
    };
    delete Person.Age; // this delets a KVP from the dictionary and will return the value as "undefined"
    document.getElementById("Dictionary").innerHTML = Person.Age; // this displays a value from the dicitonary
}
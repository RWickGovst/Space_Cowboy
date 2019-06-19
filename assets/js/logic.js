
$( document ).ready(function() {

    // INITALIZE FIREBASE
// ===============================================================
var firebaseConfig = {
    apiKey: "AIzaSyD9ffjp1EACemKsaZAGQzujpsb-8nMuo2M",
    authDomain: "space-cowboys-c0c9a.firebaseapp.com",
    databaseURL: "https://space-cowboys-c0c9a.firebaseio.com",
    projectId: "space-cowboys-c0c9a",
    storageBucket: "space-cowboys-c0c9a.appspot.com",
    messagingSenderId: "720166346595",
    appId: "1:720166346595:web:db2ac1c989c88325"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// event.preventDefault();
// create variable to reference the data base
var database = firebase.database();

database.ref().on("value", function(snapshot) {
console.log("Defined on Load",snapshot.val());

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
// LOAD PAGE FUNCTION
// ===============================================================

$( document ).ready(function() {
    // console.log( "ready!" );
    $('select').formSelect();
    
    
    // $('input#input_text, textarea#textarea2').characterCounter();
    $("#data-output").hide();

});

// VARIABLES
// ===============================================================

var firstName;
var lastName;
var weight; 
var age;
var planetChoice;
var spaceCraft;
var displayedPlanet;

// FUNCTIONS
// ===============================================================

// click submit button
$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("clicked");

    // reassigning variables with our user input
    firstName = $("#first_name").val().trim();
    lastName = $("#last_name").val().trim();
    weight = $("#weight").val().trim(); 
    age = $("#age").val().trim();
    planetChoice = $("#planet").children("option:selected").val();
    spaceCraft = $("#craft").children("option:selected").val();

    // console.log(firstName);
    // console.log(lastName);
    // console.log(weight);
    // console.log(age);
    // console.log(planetChoice);
    // console.log(spaceCraft);

    // change background to planetChoice
    if(planetChoice === "mars"){
        console.log("we're going to mars")
        $("html").css('background', 'url("assets/images/mars.jpg") no-repeat center center fixed');
    }
    $("#input-feilds").hide();
    $("#data-output").show();
    displayPlanetImage();
    displayPlanetInfo();
});
function displayPlanetInfo() {

    database.ref().on("value", function(snapshot) {
        var fbData = snapshot.val()
    
        console.log("chosen planet", planetChoice)
    if (planetChoice == "jupiter"){
        displayedPlanet = {
            distance: fbData.destination.jupiter.distance,
            size: fbData.destination.jupiter.size,
            type: fbData.destination.jupiter.type
            } 
    }
    else if (planetChoice == "mars"){
        displayedPlanet = {
            distance: fbData.destination.mars.distance,
            size: fbData.destination.mars.size,
            type: fbData.destination.mars.type,
            image: fbData.destination.mars.nasaID
        }
    }
    else if (planetChoice == "mercury"){
        displayedPlanet = {
            distance: fbData.destination.mercury.distance,
            size: fbData.destination.mercury.size,
            type: fbData.destination.mercury.type
        }
    }
    else if (planetChoice == "neptune"){
        displayedPlanet = {
            distance: fbData.destination.neptune.distance,
            size: fbData.destination.neptune.size,
            type: fbData.destination.neptune.type
        }
    }
    else if (planetChoice == "pluto"){
        displayedPlanet = {
            distance: fbData.destination.pluto.distance,
            size: fbData.destination.pluto.size,
            type: fbData.destination.pluto.type
        }
    }
    else if (planetChoice == "saturn"){
        displayedPlanet = {
            distance: fbData.destination.saturn.distance,
            size: fbData.destination.saturn.size,
            type: fbData.destination.saturn.type
        }
    }
    else if (planetChoice == "sun"){
        displayedPlanet = {
            distance: fbData.destination.sun.distance,
            size: fbData.destination.sun.size,
            type: fbData.destination.sun.type
        }
    }
    else if (planetChoice == "uranus"){
        displayedPlanet = {
            distance: fbData.destination.uranus.distance,
            size: fbData.destination.uranus.size,
            type: fbData.destination.uranus.type
        }
    }
    else if (planetChoice == "venus"){
        displayedPlanet = {
            distance: fbData.destination.venus.distance,
            size: fbData.destination.venus.size,
            type: fbData.destination.venus.type
        }
    }
    console.log ("displayed planet data", fbData, "planet choice", planetChoice)
    console.log(displayedPlanet);
    $("#title-of-planet").html(
        "Your destination is " + planetChoice.toUpperCase() + ". It is " + displayedPlanet.distance + " from Earth."
        + " It is " + displayedPlanet.size + " times larger than the Earth." + " It is a " + displayedPlanet.type + " planet."
    )
});
}


// Nasa API connection
function displayPlanetImage() {
    // planetChoice = $("#planet option:selected").val();
    console.log(planetChoice);
    
    // Mars image
    // response.collection.items[76].links[0].href + ">"
    var nasaQuery = "https://images-api.nasa.gov/search?q=" + planetChoice;
    // var nasaQuery = "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg";
    // Ip2unDZzier4N1q7RpLlfMSHLWLoYDimT5hsxIzc
    // console.log(queryURL)

    console.log(nasaQuery)

    $.ajax({
        url: nasaQuery,
        method: "GET"
    }).then(function (response) {
        // console.log("planet requested")
        // console.log(response)
        // console.log(response.collection)
        // console.log(response.collection.href)


        // for (var i = 0; i < response.data.length; i++)

        $("#data-output").append("<img src=" + response.collection.items[0].links[0].href + ">")
        // console.log(response.collection.items[0].links[0].href);
       
    });

}

});
// RENDER DROP DOWN
// ===============================================================

// $('.dropdown-trigger').dropdown();
// var planets = [mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];

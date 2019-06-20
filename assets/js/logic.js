
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

// database.ref().on("value", function (snapshot) {
//     console.log(snapshot.val());

// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });

// LOAD PAGE FUNCTION
// ===============================================================

$( document ).ready(function() {
// console.log( "ready!" );

// Materialize Form 
$('select').formSelect();
// hide div for planet data
$("#data-output").hide();
// hide modal trigger
$("#myBtn").hide();

});

// GLOBAL VARIABLES
// ===============================================================

// Input forms
var firstName;
var lastName;
var weight; 
var age;
var destination;
var spaceCraft;
var planetChoice;
var displayedPlanet;

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// ON CLICK EVENT
// ===============================================================

// click submit button
$("#submit").on("click", function(event){
event.preventDefault();
// $(".header").hide();
$(".headerDiv").empty();
// console.log("clicked");

// reassigning variables with our user input
firstName = $("#first_name").val().trim();
lastName = $("#last_name").val().trim();
weight = $("#weight").val().trim(); 
age = $("#age").val().trim();
destination = $("#planet").children("option:selected").val();
spaceCraft = $("#craft").children("option:selected").val();
planetChoice = $("#planet").children("option:selected").val();
var planetName = destination.toUpperCase();
planetName = $("<h3>").text(planetName);
$(".headerDiv").html(planetName);
// console.log(firstName);
// console.log(lastName);
// console.log(weight);
// console.log(age);
// console.log(destination);
// console.log(spaceCraft);
// modal.style.display = "block";

// change background
switch (destination) {

    case "mars":

        $("html").css('background', 'url("assets/images/mars.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Mars").css('font-size', '20px');
        break;

    case "pluto":

        $("html").css('background', 'url("assets/images/pluto-1080p.png") no-repeat center center fixed');
        $("#title-of-planet").text("Pluto").css('font-size', '20px');
        break;

    case "neptune":

        $("html").css('background', 'url("assets/images/neptune-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Neptune").css('font-size', '20px');
        break;

    case "saturn":

        $("html").css('background', 'url("assets/images/saturn-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Saturn").css('font-size', '20px');
        break;

    case "sun":

        $("html").css('background', 'url("assets/images/sun-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Sun").css('font-size', '20px');
        break;

    case "mercury":

        $("html").css('background', 'url("assets/images/mercury-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Mercury").css('font-size', '20px');
        break;

    case "uranus":

        $("html").css('background', 'url("assets/images/uranus-1080p.png") no-repeat center center fixed');
        $("#title-of-planet").text("Uranus").css('font-size', '20px');
        break;

    case "jupiter":

        $("html").css('background', 'url("assets/images/jupiter-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Jupiter").css('font-size', '20px');
        break;

    case "venus":

        $("html").css('background', 'url("assets/images/venus-1080p.jpg") no-repeat center center fixed');
        $("#title-of-planet").text("Venus").css('font-size', '20px');
        break;

}

// check to see if user input all feilds
if ($.trim($("#first_name").val()) === "" || $.trim($("#last_name").val()) === "" || $.trim($("#weight").val()) === "" || $.trim($("#age").val()) === "") {
    // alert('you did not fill out one of the fields');
    modal.style.display = "block";

}
else {
    $("#input-feilds").hide();
    $("#data-output").show();
    displayPlanetImage();
    displayPlanetInfo();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// AJAX CALL
// ===============================================================


function displayPlanetInfo() {

database.ref().on("value", function(snapshot) {
    var fbData = snapshot.val()

    // console.log("chosen planet", planetChoice)
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
// console.log ("displayed planet data", fbData, "planet choice", planetChoice)
// console.log(displayedPlanet);
$("#title-of-planet").html(
    "Your destination is " + planetChoice + ". It is " + displayedPlanet.distance + " AU's from Earth."
    + " It is " + displayedPlanet.size + " times the size of the Earth." + " It is a " + displayedPlanet.type + " planet."
)
$("#title-of-planet").prepend("Have a super trip " + firstName + "! ");
});}

// Nasa API connection
function displayPlanetImage() {
    // destination = $("#planet option:selected").val();
    // console.log(destination);

    // Mars image
    // response.collection.items[76].links[0].href + ">"
    var nasaQuery = "https://images-api.nasa.gov/search?q=" + destination;

    // Ip2unDZzier4N1q7RpLlfMSHLWLoYDimT5hsxIzc
    // console.log(queryURL)

    // console.log(nasaQuery)

    $.ajax({
        url: nasaQuery,
        method: "GET"
    }).then(function (response) {
        // console.log("planet requested")
        // console.log(response)
        // console.log(response.collection)
        // console.log(response.collection.href)


        // for (var i = 0; i < response.data.length; i++)

        $("#title-of-planet").append("<img src=" + response.collection.items[0].links[0].href + " id='newimage'>")
        // console.log(response.collection.items[0].links[0].href);

    });

}

});


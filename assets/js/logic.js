
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
console.log(snapshot.val());

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
// LOAD PAGE FUNCTION
// ===============================================================
    // console.log( "ready!" );
    $('select').formSelect();
    
    // what's this? *********************************
    $('input#input_text, textarea#textarea2').characterCounter();


// VARIABLES
// ===============================================================

var firstName;
var lastName;
var weight; 
var age;
var destination;
var spaceCraft;


// FUNCTIONS
// ===============================================================


$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("clicked");

    firstName = $("#first_name").val().trim();
    lastName = $("#last_name").val().trim();
    weight = $("#weight").val().trim(); 
    age = $("#age").val().trim();
    destination = $("#planet").children("option:selected").val();
    spaceCraft = $("#craft").children("option:selected").val();

    console.log(firstName);
    console.log(lastName);
    console.log(weight);
    console.log(age);
    // console.log(destination);
    console.log(spaceCraft);

    displayPlanetImage()

});

// Nasa API connection
function displayPlanetImage() {
    // destination = $("#planet option:selected").val();
    console.log(destination);
    
    // Mars image
    // response.collection.items[76].links[0].href + ">"
    var nasaQuery = "https://images-api.nasa.gov/search?q=" + destination;

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

        $("body").append("<img src=" + response.collection.items[0].links[0].href + ">")
        console.log(response.collection.items[0].links[0].href);

    });

}

});
// RENDER DROP DOWN
// ===============================================================

// $('.dropdown-trigger').dropdown();
// var planets = [mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];

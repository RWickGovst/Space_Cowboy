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

// create variable to reference the data base
// var database = firebase.database();


// LOAD PAGE FUNCTION
// ===============================================================

$( document ).ready(function() {
    console.log( "ready!" );
    $('select').formSelect();
    $('input#input_text, textarea#textarea2').characterCounter();
});

// VARIABLES
// ===============================================================

var firstName;
var lastName;
var weight; 
var age;
var desination;
var spaceCraft;



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
    desination = $("#planet").children("option:selected").val();
    spaceCraft = $("#craft").children("option:selected").val();

    console.log(firstName);
    console.log(lastName);
    console.log(weight);
    console.log(age);
    console.log(desination);
    console.log(spaceCraft);

    if(desination === "mars"){
        console.log("we're going to mars")
        $("html").css('background', 'url("assets/images/mars.jpg") no-repeat center center fixed');
    }

});



// RENDER DROP DOWN
// ===============================================================

// $('.dropdown-trigger').dropdown();
// var planets = [mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];

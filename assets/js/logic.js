
$(document).ready(function () {

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

    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    // LOAD PAGE FUNCTION
    // ===============================================================

    $(document).ready(function () {
        // console.log( "ready!" );
        $('select').formSelect();

        // what's this? *********************************
        // $('input#input_text, textarea#textarea2').characterCounter();
        $("#data-output").hide();

    });

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

    // click submit button
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");

        // reassigning variables with our user input
        firstName = $("#first_name").val().trim();
        lastName = $("#last_name").val().trim();
        weight = $("#weight").val().trim();
        age = $("#age").val().trim();
        destination = $("#planet").children("option:selected").val();
        spaceCraft = $("#craft").children("option:selected").val();

        // console.log(firstName);
        // console.log(lastName);
        // console.log(weight);
        // console.log(age);
        // console.log(destination);
        // console.log(spaceCraft);

        // change background to destination
        // if(destination === "mars"){
        //     console.log("we're going to mars")
        //     $("html").css('background', 'url("assets/images/mars.jpg") no-repeat center center fixed');
        // }

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

                $("html").css('background', 'url("assets/images/sunimage.jpg") no-repeat center center fixed');
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
        $("#input-feilds").hide();
        $("#data-output").show();
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

            $("#data-output").append("<img src=" + response.collection.items[76].links[0].href + ">")
            // console.log(response.collection.items[0].links[0].href);

        });

    }

});
// RENDER DROP DOWN
// ===============================================================

// $('.dropdown-trigger').dropdown();
// var planets = [mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];

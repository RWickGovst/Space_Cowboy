// LOAD PAGE FUNCTION
// ===============================================================

$( document ).ready(function() {
    console.log( "ready!" );
    $('select').formSelect();
    $('input#input_text, textarea#textarea2').characterCounter();


// VARIABLES
// ===============================================================




// FUNCTIONS
// ===============================================================
// Nasa API connection
            function displayPlanetImage() {
                var destination = $(this).attr("data-name");
                // console.log(destination)

                var queryURL = "https://images-api.nasa.gov/search?q=" + "destination";

                // Ip2unDZzier4N1q7RpLlfMSHLWLoYDimT5hsxIzc
                // console.log(queryURL)

                $.ajax({
                    url: queryURL,
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
displayPlanetImage();



// RENDER DROP DOWN
// ===============================================================

// $('.dropdown-trigger').dropdown();
// var planets = [mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];

});
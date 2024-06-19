const APIkey = "&appid=cbfda5c198563b28c04126c28f33c8f6";
let searchForm = document.getElementById("search-form");
let entry = document.getElementById("search-value");
let processedEntry;
let cityLat;
let cityLon;
let requestURL;
let forecastURL;

function handleFormSubmit(event) {
    event.preventDefault();
    cityq = entry.value.trim().replaceAll(" ", "_");

    requestURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityq + "&limit=1" + APIkey;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data[0].lat);
            console.log(data[0].lon);
            cityLat = data[0].lat;
            cityLon = data[0].lon;
            forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + APIkey;
            console.log(forecastURL);
            fetch(forecastURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                })

        });

    entry.value = "";
};

searchForm.addEventListener("submit", handleFormSubmit);



// https://api.openweathermap.org/data/2.5/forecast?
//lat= &lon=

// &units=imperial
// APIkey

//https://api.openweathermap.org/geo/1.0/direct?q=   &limit=1" + APIkey
const APIkey = "&=cbfda5c198563b28c04126c28f33c8f6";
let searchForm = document.getElementById("search-form");
let entry = document.getElementById("search-value");
let citylat;
let citylong;

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(entry.value.trim().replaceAll(" ", "_"));
    entry.value = "";
};

searchForm.addEventListener("submit", handleFormSubmit);

let requestURL;

// https://api.openweathermap.org/data/2.5/forecast?
//lat= &lon=

// &units=imperial
// APIkey

//https://api.openweathermap.org/geo/1.0/direct?q=   &limit=1" + APIkey
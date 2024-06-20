const APIkey = "&appid=cbfda5c198563b28c04126c28f33c8f6";
const searchForm = document.getElementById("search-form");
const entry = document.getElementById("search-value");
const mainContainer = document.getElementById("main-container");
let processedEntry;
let cityLat;
let cityLon;
let requestURL;
let forecastURL;

function handleFormSubmit(event) {
    event.preventDefault();
    city = entry.value.trim();
    cityq = entry.value.trim().replaceAll(" ", "_");

    requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityq}&limit=1${APIkey}`;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log("Lat: " + data[0].lat);
            console.log("Lon: " + data[0].lon);
            cityLat = data[0].lat;
            cityLon = data[0].lon;
            forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial${APIkey}`;
            fetch(forecastURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    // console.log(data.list);
                    // console.log(data.list[5].dt_txt);
                    // console.log("Humidity: " + data.list[5].main.humidity);
                    // console.log("Temperature: " + Math.round(data.list[5].main.temp));

                    // console.log(data.list[13].dt_txt);
                    // console.log("Humidity: " + data.list[13].main.humidity);
                    // console.log("Temperature: " + Math.round(data.list[13].main.temp));

                    // console.log(data.list[21].dt_txt);
                    // console.log("Humidity: " + data.list[21].main.humidity);
                    // console.log("Temperature: " + data.list[21].main.temp);

                    // console.log(data.list[29].dt_txt);
                    // console.log("Humidity: " + data.list[29].main.humidity);
                    // console.log("Temperature: " + data.list[29].main.temp);

                    // console.log(data.list[37].dt_txt);
                    // console.log("Humidity: " + data.list[37].main.humidity);
                    // console.log("Temperature: " + data.list[37].main.temp);

                    let cityDiv = document.createElement("div");


                    let forecastContainer = document.createElement("div");
                    forecastContainer.setAttribute("id", "forecast");
                    let forecastEl = document.getElementById("forecast");

                    let day1 = document.createElement("div");
                    day1.setAttribute("id", "day1");
                    let day1El = document.getElementById("day1");

                    let day2 = document.createElement("div");
                    day2.setAttribute("id", "day2");
                    let day2El = document.getElementById("day2");

                    let day3 = document.createElement("div");
                    day3.setAttribute("id", "day3");
                    let day3El = document.getElementById("day3");

                    let day4 = document.createElement("div");
                    day4.setAttribute("id", "day4");
                    let day4El = document.getElementById("day4");

                    let day5 = document.createElement("div");
                    day5.setAttribute("id", "day5");
                    let day5El = document.getElementById("day5");

                    cityDiv.setAttribute("id", "city-name");
                    cityDiv.innerHTML = city;
                    let cityEl = document.getElementById("city-name");

                    forecastContainer.setAttribute("class", "columns");
                        day1.setAttribute("class", "column is-one-fifth");
                        day1.innerHTML =    `<p>Temperature:</p> <h1 class="title">${Math.round(data.list[5].main.temp)}</h1> Humidity: ${data.list[5].main.humidity}%`;

                        day2.setAttribute("class", "column is-one-fifth");
                        day2.innerHTML =    `<p>Temperature:</p> <h1 class="title">${Math.round(data.list[13].main.temp)}</h1> Humidity: ${data.list[13].main.humidity}%`;

                        day3.setAttribute("class", "column is-one-fifth");
                        day3.innerHTML =    `<p>Temperature:</p> <h1 class="title">${Math.round(data.list[21].main.temp)}</h1> Humidity: ${data.list[21].main.humidity}%`;

                        day4.setAttribute("class", "column is-one-fifth");
                        day4.innerHTML =    `<p>Temperature:</p> <h1 class="title">${Math.round(data.list[29].main.temp)}</h1>Humidity: ${data.list[29].main.humidity}`;

                        day5.setAttribute("class", "column is-one-fifth");
                        day5.innerHTML =    `<p>Temperature:</p> <h1 class="title">${Math.round(data.list[37].main.temp)}</h1> Humidity: ${data.list[37].main.humidity}%`;
                    if (mainContainer.childElementCount!==0) {
                        mainContainer.removeChild(cityEl);
                        forecastEl.removeChild(day1El);
                        forecastEl.removeChild(day2El);
                        forecastEl.removeChild(day3El);
                        forecastEl.removeChild(day4El);
                        forecastEl.removeChild(day5El);
                        mainContainer.removeChild(forecastEl);

                        mainContainer.appendChild(cityDiv);
                        forecastContainer.appendChild(day1);
                        forecastContainer.appendChild(day2);
                        forecastContainer.appendChild(day3);
                        forecastContainer.appendChild(day4);
                        forecastContainer.appendChild(day5);
                        mainContainer.appendChild(forecastContainer);
                    } else {
                    mainContainer.appendChild(cityDiv);
                    forecastContainer.appendChild(day1);
                    forecastContainer.appendChild(day2);
                    forecastContainer.appendChild(day3);
                    forecastContainer.appendChild(day4);
                    forecastContainer.appendChild(day5);
                    mainContainer.appendChild(forecastContainer);
                    }

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
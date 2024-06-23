const APIkey = "&appid=cbfda5c198563b28c04126c28f33c8f6";
const searchForm = document.getElementById("search-form");
const entry = document.getElementById("search-value");
const searchHistory = document.getElementById("recent-searches");
const mainContainer = document.getElementById("main-container");

let processedEntry;
let cityLat;
let cityLon;
let requestURL;
let forecastURL;

let history = JSON.parse(localStorage.getItem("searches"));
if (history === null) {
    history = []
} else {
    populateRecent();
};

function handleFormSubmit(event) {
    event.preventDefault();
    city = entry.value.trim();
    cityq = entry.value.trim().replaceAll(" ", "_");
    history.push(city);
    localStorage.setItem("searches", JSON.stringify(history));
    console.log(history);
    
    requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityq}&limit=1${APIkey}`;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            cityState = data[0].state;
            console.log("Lat: " + data[0].lat);
            console.log("Lon: " + data[0].lon);
            cityLat = data[0].lat;
            cityLon = data[0].lon;
            forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial${APIkey}`;
            console.log(forecastURL);
            fetch(forecastURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    let recentSearch = document.createElement("ul");
                    recentSearch.innerHTML = `<li>${cityq}</li>`;

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
                    cityDiv.setAttribute("class", "column is-narrow title");
                    cityDiv.innerHTML = `${city}<br><h2 class="subtitle">${cityState}</h2>`;
                    let cityEl = document.getElementById("city-name");

                    forecastContainer.setAttribute("class", "columns is-mobile is-vcentered is-multiline is-centered");
                        console.log(data.list);
                        day1.setAttribute("class", "column is-narrow");
                        
                        dateDay1 = data.list[5].dt_txt;
                        formatDateDay1 = dateDay1.slice(0, 10);

                        dayJsFormatDateDay1 = dayjs(formatDateDay1).format('ddd, MM/DD/YY');
                        day1.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay1}</p><p class="is-size-7">Temperature:</p> <h1 class="title has-text-warning">${Math.round(data.list[5].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="mb-0 pb-0 has-text-weight-bold  has-text-warning">${data.list[5].wind.speed}</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold has-text-warning">${data.list[5].main.humidity}%</p>`;

                        dateDay2 = data.list[13].dt_txt;
                        formatDateDay2 = dateDay2.slice(0, 10);

                        dayJsFormatDateDay2 = dayjs(formatDateDay2).format('ddd, MM/DD/YY');
                        day2.setAttribute("class", "column is-narrow");
                        day2.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay2}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[13].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[13].wind.speed}</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[13].main.humidity}%</p>`;
                        
                        dateDay3 = data.list[21].dt_txt;
                        formatDateDay3 = dateDay3.slice(0, 10);

                        dayJsFormatDateDay3 = dayjs(formatDateDay3).format('ddd, MM/DD/YY');
                        day3.setAttribute("class", "column is-narrow");
                        day3.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay3}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[21].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[21].wind.speed}</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[21].main.humidity}%</p>`;

                        dateDay4 = data.list[29].dt_txt;
                        formatDateDay4 = dateDay4.slice(0, 10);
                        
                        dayJsFormatDateDay4 = dayjs(formatDateDay4).format('ddd, MM/DD/YY');
                        day4.setAttribute("class", "column is-narrow");
                        day4.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay4}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[29].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[29].wind.speed}</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[29].main.humidity}%</p>`;

                        dateDay5 = data.list[37].dt_txt;
                        formatDateDay5 = dateDay5.slice(0, 10);

                        dayJsFormatDateDay5 = dayjs(formatDateDay5).format('ddd, MM/DD/YY');
                        day5.setAttribute("class", "column is-narrow");
                        day5.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay5}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[37].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[37].wind.speed}</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[37].main.humidity}%</p>`;
                    if (mainContainer.childElementCount!==0) {
                        forecastEl.removeChild(cityEl);
                        forecastEl.removeChild(day1El);
                        forecastEl.removeChild(day2El);
                        forecastEl.removeChild(day3El);
                        forecastEl.removeChild(day4El);
                        forecastEl.removeChild(day5El);
                        mainContainer.removeChild(forecastEl);

                        forecastContainer.appendChild(cityDiv);
                        forecastContainer.appendChild(day1);
                        forecastContainer.appendChild(day2);
                        forecastContainer.appendChild(day3);
                        forecastContainer.appendChild(day4);
                        forecastContainer.appendChild(day5);
                        mainContainer.appendChild(forecastContainer);
                    } else {
                        forecastContainer.appendChild(cityDiv);
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

function populateRecent() {
    for (let i = 0; i < 6; ++i) {

    } 

};

searchForm.addEventListener("submit", handleFormSubmit);



// https://api.openweathermap.org/data/2.5/forecast?
//lat= &lon=

// &units=imperial
// APIkey

//https://api.openweathermap.org/geo/1.0/direct?q=   &limit=1" + APIkey
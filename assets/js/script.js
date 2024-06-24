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
// let currentCity = history[0];
// console.log(currentCity);
if (history === null) {
    history = [];
} else {
    loadCurrent();
    populateRecent();
};

function loadCurrent() {
}

function handleFormSubmit(event) {
    event.preventDefault();
    city = entry.value.trim();
    cityq = entry.value.trim().replaceAll(" ", "_");
    history.unshift(city);
    localStorage.setItem("searches", JSON.stringify(history));
    console.log(history);
    processRequest(city, cityq);
    let search = document.createElement("span");
    search.innerHTML = `<span class="tag is-hoverable is-dark mx-2 my-2 is-size-6">${history[0]}</span>`;
    searchHistory.insertAdjacentHTML('afterbegin', `<span class="tag is-hoverable is-dark mx-2 my-2 is-size-6">${history[0]}</span>`);
}
const processRequest = function() {
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

                    let cityCurrentContainer = document.createElement("div");
                    cityCurrentContainer.setAttribute("id", "city-current");
                    let cityCurrentContainerEl = document.getElementById("city-current");
                    let forecastContainer = document.createElement("div");
                    forecastContainer.setAttribute("id", "forecast");
                    let forecastEl = document.getElementById("forecast");

                    let day0 = document.createElement("div");
                    day0.setAttribute("id", "day0");
                    let day0El = document.getElementById("day0");

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
                    cityDiv.setAttribute("class", "column has-text-right is-vcentered is-centered is-one-sixth is-offset-one-third title");
                    cityDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="${data.list[0].weather[0].description}" /><h1 class="is-centered has-text-warning title">${city}</h1><h2 class="subtitle">${cityState}</h2>`;
                    let cityEl = document.getElementById("city-name");

                    cityCurrentContainer.setAttribute("class", "columns pb-3 mb-5 is-mobile is-vcentered is-centered");
                    forecastContainer.setAttribute("class", "columns is-flex is-mobile is-vcentered is-multiline is-centered");
                        console.log(data.list);
                        let hi1 = data.list.findIndex(function(element) {return element.dt_txt.includes("18:00")});

                        let hi2 = hi1+8;
                        let hi3 = hi2+8;
                        let hi4 = hi3+8;
                        let hi5 = hi4+8;

                        console.log(hi1);
                        console.log(data.list[hi1].main.temp);

                        day0.setAttribute("class", "column is-centered is-one-sixth is-offset-one-third");
                        
                        dateDay0 = data.list[0].dt_txt;
                        formatDateDay0 = dateDay0.slice(0, 10);
                        dayJsFormatDateDay0 = dayjs(formatDateDay0).format('ddd, MM/DD/YY');

                        day0.innerHTML =    `<p class="has-text-weight-bold has-text-warning">${dayJsFormatDateDay0}</p><p class="is-size-7">Temperature:</p> <h1 class="title has-text-warning">${Math.round(data.list[0].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="mb-0 pb-0 has-text-weight-bold  has-text-warning">${data.list[0].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold has-text-warning">${data.list[0].main.humidity}%</p>`;

                        day1.setAttribute("class", "column is-one-third-mobile is-narrow-tablet is-narrow-desktop");
                        
                        dateDay1 = data.list[hi1].dt_txt;
                        formatDateDay1 = dateDay1.slice(0, 10);
                        dayJsFormatDateDay1 = dayjs(formatDateDay1).format('ddd, MM/DD/YY');

                        day1.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay1}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[hi1].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="mb-0 pb-0 has-text-weight-bold">${data.list[hi1].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[hi1].main.humidity}%</p><img src="https://openweathermap.org/img/wn/${data.list[hi1].weather[0].icon}.png" alt="${data.list[hi1].weather[0].description}" />`;

                        dateDay2 = data.list[hi2].dt_txt;
                        formatDateDay2 = dateDay2.slice(0, 10);
                        dayJsFormatDateDay2 = dayjs(formatDateDay2).format('ddd, MM/DD/YY');

                        day2.setAttribute("class", "column is-one-third-mobile is-narrow-tablet is-narrow-desktop");
                        day2.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay2}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[hi2].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[hi2].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[hi2].main.humidity}%</p><img src="https://openweathermap.org/img/wn/${data.list[hi2].weather[0].icon}.png" alt="${data.list[hi2].weather[0].description}"/>`;
                        
                        dateDay3 = data.list[hi3].dt_txt;
                        formatDateDay3 = dateDay3.slice(0, 10);
                        dayJsFormatDateDay3 = dayjs(formatDateDay3).format('ddd, MM/DD/YY');

                        day3.setAttribute("class", "column is-one-third-mobile is-narrow-tablet is-narrow-desktop");
                        day3.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay3}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[hi3].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[hi3].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[hi3].main.humidity}%</p><img src="https://openweathermap.org/img/wn/${data.list[hi3].weather[0].icon}.png" alt="${data.list[hi3].weather[0].description}"/>`;

                        dateDay4 = data.list[hi4].dt_txt;
                        formatDateDay4 = dateDay4.slice(0, 10);
                        dayJsFormatDateDay4 = dayjs(formatDateDay4).format('ddd, MM/DD/YY');

                        day4.setAttribute("class", "column is-one-third-mobile is-narrow-tablet is-narrow-desktop");
                        day4.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay4}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[hi4].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[hi4].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[hi4].main.humidity}%</p><img src="https://openweathermap.org/img/wn/${data.list[hi4].weather[0].icon}.png" alt="${data.list[hi4].weather[0].description}"/>`;

                        dateDay5 = data.list[hi5].dt_txt;
                        formatDateDay5 = dateDay5.slice(0, 10);
                        dayJsFormatDateDay5 = dayjs(formatDateDay5).format('ddd, MM/DD/YY');

                        day5.setAttribute("class", "column is-one-third-mobile is-narrow-tablet is-narrow-desktop");
                        day5.innerHTML =    `<p class="has-text-weight-bold">${dayJsFormatDateDay5}</p><p class="is-size-7">Temperature:</p> <h1 class="title">${Math.round(data.list[hi5].main.temp)}</h1> <p class="is-size-7">Wind speed: </p><p class="has-text-weight-bold">${data.list[hi5].wind.speed} mph</p> <p class="is-size-7">Humidity: </p><p class="has-text-weight-bold">${data.list[hi5].main.humidity}%</p><img src="https://openweathermap.org/img/wn/${data.list[hi5].weather[0].icon}.png" alt="${data.list[hi5].weather[0].description}"/>`;
                    if (mainContainer.childElementCount!==0) {

                        cityCurrentContainerEl.removeChild(cityEl);
                        cityCurrentContainerEl.removeChild(day0El);
                        forecastEl.removeChild(day1El);
                        forecastEl.removeChild(day2El);
                        forecastEl.removeChild(day3El);
                        forecastEl.removeChild(day4El);
                        forecastEl.removeChild(day5El);
                        mainContainer.removeChild(cityCurrentContainerEl);
                        mainContainer.removeChild(forecastEl);

                        cityCurrentContainer.appendChild(cityDiv);
                        cityCurrentContainer.appendChild(day0);
                        forecastContainer.appendChild(day1);
                        forecastContainer.appendChild(day2);
                        forecastContainer.appendChild(day3);
                        forecastContainer.appendChild(day4);
                        forecastContainer.appendChild(day5);
                        mainContainer.appendChild(cityCurrentContainer);
                        mainContainer.appendChild(forecastContainer);
                    } else {
                        cityCurrentContainer.appendChild(cityDiv);
                    cityCurrentContainer.appendChild(day0);
                    forecastContainer.appendChild(day1);
                    forecastContainer.appendChild(day2);
                    forecastContainer.appendChild(day3);
                    forecastContainer.appendChild(day4);
                    forecastContainer.appendChild(day5);
                    mainContainer.appendChild(cityCurrentContainer);
                    mainContainer.appendChild(forecastContainer);
                    }

                })

        });
    entry.value = "";
};

function populateRecent() {


    let maxNoEl = Math.min(history.length, 6);
    for (let i = 0; i < maxNoEl; ++i) {
        let search = document.createElement("span");
        console.log(history[i]);

        // search.setAttribute("id", "recentSearch");
        // let prevSearchList = document.getElementById("recentSearch");
        search.innerHTML = `<span class="tag is-hoverable is-dark mx-2 my-2 is-size-6">${history[i]}</span>`;
        searchHistory.appendChild(search);
    } 

};

searchForm.addEventListener("submit", handleFormSubmit);
searchHistory.addEventListener("click", function(event) {
    city = event.target.textContent;
    cityq = event.target.textContent.replaceAll(" ", "_");
    processRequest(city, cityq);
}

)


// https://api.openweathermap.org/data/2.5/forecast?
//lat= &lon=

// &units=imperial
// APIkey

//https://api.openweathermap.org/geo/1.0/direct?q=   &limit=1" + APIkey
const APIkey = "cbfda5c198563b28c04126c28f33c8f6";
const searchForm = document.getElementById("search-form");
let whatever = document.getElementById("search-value")


function handleFormSubmit(event) {
    event.preventDefault();
    console.log(whatever.value);
};

searchForm.addEventListener("submit", handleFormSubmit);

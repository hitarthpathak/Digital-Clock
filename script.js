let time = document.getElementById("time");
let date = document.getElementById("date");
let day = document.getElementById("day");

// --------------------------------------------------------------------------------------------------

setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000)

// --------------------------------------------------------------------------------------------------

date.innerHTML = new Date().toLocaleDateString();

// --------------------------------------------------------------------------------------------------

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
let newday = new Date().getDay();
day.innerHTML = days[newday];
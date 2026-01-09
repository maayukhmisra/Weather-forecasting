//const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const apiKey = "963662958dff83bce60a90cf940d2aa3"; 

const inputvalue = document.querySelector(".input");
const windspeed = document.querySelector(".windspeed");
const temprature = document.querySelector(".temprature");
const humidity = document.querySelector(".humidity");

function input(e) {

    e.preventDefault();
    const city = document.querySelector("#inputvalue").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);

            var tempt = data.main.temp;
            var humid = data.main.humidity;
            var windspd = data.wind.speed;

            windspeed.innerHTML = "Windspeed: " + windspd;
            temprature.innerHTML = "Temprature: " + tempt;
            humidity.innerHTML = "Humidity: " + humid;
        });
}

inputvalue.addEventListener("submit", input);

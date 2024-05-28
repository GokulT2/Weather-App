
"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=1dc02c2cda3d32eda98eede7405d0e42`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".Weather-Icon");


function city() {
	const inputName = document.querySelector("#impTXT");
	const city = `&q=${inputName.value}`;
	checkWeather(city);
}

// document.querySelector(".WeatherDisplay").style.display = "block";


async function checkWeather(city) {
	const response = await fetch(apiURL + appKey + city);
	var data = await response.json();
	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/018/931/077/original/cartoon-cloud-icon-png.png";
	}

	if (data.weather[0].main == "Mist") {
		weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/10630/10630000.png";
	}

	if (data.weather[0].main == "Rain") {
		weatherIcon.src = "https://png.pngtree.com/png-clipart/20200225/original/pngtree-rain-icon-creative-design-template-png-image_5259110.jpg";
	}

	if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4837/4837659.png";
	}

	if (data.weather[0].main == "Clear") {
		weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3032/3032894.png";
	}

	if (data.weather[0].main == "Snow") {
		weatherIcon.src = "https://png.pngtree.com/element_our/png/20181206/snow-vector-icon-png_261816.jpg";
	}

	if (data.weather[0].main == "Haze") {
		weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
	}

	document.querySelector(".WeatherDisplay").style.display = "block";
};

searchBtn.addEventListener("click", city); // addEventlistener e funcion call korle () lage na


// const input = document.getElementById("impTXT");
searchField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		city();
	}
});

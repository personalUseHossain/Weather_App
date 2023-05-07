//Variables
const getWeatherBtn = document.getElementById("btn");
const Input = document.getElementById("input");
const weatherShow = document.querySelector(".weather-show");
const loadingAnimation = document.querySelector(".loading-animation");

//EventListenr for the Get weather BTN
getWeatherBtn.addEventListener("click", () => {
  //loading animation start when reading data from api
  loadingAnimation.classList.remove("none");

  //Getting city name
  const cityName = Input.value;
  weatherShow.style.display = "grid";

  //Fetching data from API
  async function fetchData() {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
    const option = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "835a27c758msh27567010ccff499p1f4002jsn3586582498bb",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    const res = await fetch(url, option);
    const data = await res.json();

    //setting the static harcoded weather value to true value from API
    const temp = document.getElementById("tem");
    const humid = document.getElementById("humid");
    const wind = document.getElementById("wind-speed");
    const feelTemp = document.getElementById("feel");
    temp.innerHTML = data.temp + "C";
    humid.innerHTML = data.humidity + "%";
    wind.innerHTML = data.wind_speed + "KM";
    feelTemp.innerHTML = data.feels_like + "C";

    //making appear the weather-show section when request for weather other wise this section won't be showed to users
    weatherShow.style.display = "grid";

    //Loading animation end when reading data from api is done
    loadingAnimation.classList.add("none");
  }
  //caling the function for getting weather and setting it up on dom
  fetchData();
});

//event listener on window object for loading animation to start
window.addEventListener("load", () => {
  loadingAnimation.classList.add("none");
});

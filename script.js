//Variables
const getWeatherBtn = document.getElementById("btn");
const Input = document.getElementById("input");
const weatherShow = document.querySelector(".weather-show");

//EventListenr for the Get weather BTN
getWeatherBtn.addEventListener("click", () => {
  //Getting city name
  const cityName = Input.value;
  weatherShow.style.display = "block";

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
    temp.innerHTML = data.temp + "C";
    humid.innerHTML = data.humidity + "%";
    wind.innerHTML = data.wind_speed + "KM";
  }
  fetchData();
});

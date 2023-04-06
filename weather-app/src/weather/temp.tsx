import React, { useState, useEffect } from "react";
import Weathercard, { weatherCardType } from "./weatherCard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState<weatherCardType>({
    temp:'temp',
    humidity:'humidity',
    pressure:'pressure',
    weathermood:'weathermood',
    name:'name',
    speed:'speed',
    country:'country',
    sunset:0,
  });

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=14c3b09946b03613444b45e79852fe02`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard  {...tempInfo} />
    </>
  );
};

export default Temp;
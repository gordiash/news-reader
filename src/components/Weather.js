import React, { useState, useEffect } from "react";
import {getWeather} from "../API/ApiRequest";
import Card from "./WeatherCard/Card";
import CardsContainer from "../containers/CardsContainer";


export default function General(props) {
  let [weather, setWeather] = useState({});

  const [temp, setTemp] =useState(0)

  let city = props.city

  console.log(weather)

  useEffect(() => {
    if (weather !=={}) {
    getWeather(city).then(({data})=>setWeather(data) &&
    setTemp(data.main.temp)
    )
    
     
       
    }
  }, [city]);

 

  return (
    <CardsContainer>

      <Card data={weather}
      temp={temp} />
    </CardsContainer>
  );
}

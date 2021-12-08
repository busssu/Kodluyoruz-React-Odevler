import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// WeatherContext 
const WeatherContext = createContext();

// API key 
const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = ({children}) => {

    const [weather, setWeather] = useState([]);
    // city selected
    const [city, setCity] = useState("İzmir");              
    
    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${city}&days=6&lang=tr&aqi=no&alerts=no`)
        .then((res) => setWeather(res.data.forecast.forecastday))
        .catch((err) => console.log(err))
    },[city]);

    console.log(weather)

    const values = {
        weather,
        setWeather,
        city,
        setCity
    }
 
    return(
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
}


export const useWeather = () => useContext(WeatherContext);
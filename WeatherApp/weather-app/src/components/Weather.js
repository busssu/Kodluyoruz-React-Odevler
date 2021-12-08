import { useWeather } from "../context/WeatherContext";
import "./weather.css";

function Weather() {
  const { weather } = useWeather();

  let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  return (
    <div>
      {weather.map((j) => (
        <div className="result">
          <p>
            <h2>{j.date}</h2>
            <h4>{days[new Date(j.date).getDay()]}</h4>
          </p>

          <ul key={j.date}>
            <li>
              <img src={j.day.condition.icon} alt="weather icon" />
            </li>
            <li className="condition">{j.day.condition.text}</li>
            <li>
              {Math.round(j.day.mintemp_c)}&#176; / {Math.round(j.day.maxtemp_c)}&#176;
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Weather;

import {useWeather} from "../context/WeatherContext";
import cities from "../cities.json";

function Dropdown() {

  const { city, setCity } = useWeather();

  const onSelect = (e) => {
    setCity(e.target.value);
  }

  return (
    <div>

     {/*  Navbar  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">

         {/*  Dropdown */}
          <select name="cityName" onChange={onSelect}>
    
            {cities.map((i) => (
              <option key={i.id} value={i.name} >
                {i.name}
              </option>
            ))}

          </select>

        </div>
      </nav>
      <br/>
      {/* City Name */}
      <h1>{city}</h1>
      <hr/>
    </div>
  );
}

export default Dropdown;

import "./App.css";
import Dropdown from './components/Dropdown'
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <div className="App">
      <WeatherProvider>
          <Dropdown />
          <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;

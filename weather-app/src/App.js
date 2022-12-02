import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherMaps from "./components/WeatherMaps";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route element={<WeatherMaps />} path="/weather-maps"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

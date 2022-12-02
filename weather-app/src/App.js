import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>{/* <div className="App"></div> */}</Routes>
    </BrowserRouter>
  );
}

export default App;

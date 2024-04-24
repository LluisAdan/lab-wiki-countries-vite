import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Link to="/">
        <Navbar />
      </Link>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/:countryId" element={<CountryDetailsPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

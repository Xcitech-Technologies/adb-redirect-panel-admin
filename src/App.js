import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Offer from "./Components/Offers/Offer.jsx";
import GlobalCondition from "./Components/GlobalCondition.jsx";
import Navbar from "./Layout/Navbar.jsx";
import Report from "./Components/Reports/Report.jsx";
import AddOffer from "./Components/Offers/Addoffer/AddOffer.jsx";
import General from "./Components/Offers/Addoffer/General.jsx";
import Locations from "./Components/Offers/Addoffer/Locations.jsx";
import Tracking from "./Components/Offers/Addoffer/Tracking.jsx";
import AdbFroud from "./Components/Offers/Addoffer/AdbFroud.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/offers" element={<Offer />} />
        <Route path="/admin/offers/addoffer" element={<AddOffer />}>
          <Route path="" element={<General />} />
          <Route path="locations" element={<Locations />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="adbFroud" element={<AdbFroud />} />
        </Route>
        <Route path="/admin/globalconditions" element={<GlobalCondition />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;

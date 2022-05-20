import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Offer from "./Components/Offers/Offer";
import GlobalCondition from "./Components/GlobalCondition";
import Navbar from "./Layout/Navbar";
import Report from "./Components/Reports/Report";
import AddOffer from "./Components/Offers/Addoffer/AddOffer";
import General from "./Components/Offers/Addoffer/General";
import Locations from "./Components/Offers/Addoffer/Locations";
import Tracking from "./Components/Offers/Addoffer/Tracking";
import AdbFroud from "./Components/Offers/Addoffer/AdbFroud";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/offers" element={<Offer />} />
        <Route path="/admin/offers/addoffer" element={<AddOffer />} >
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

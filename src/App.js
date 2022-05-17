import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Offer from "./Components/Offer";
import GlobalCondition from "./Components/GlobalCondition";
import Navbar from "./Layout/Navbar";
import Report from "./Components/Reports/Report";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/offers" element={<Offer />} />
        <Route path="/admin/globalconditions" element={<GlobalCondition />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;

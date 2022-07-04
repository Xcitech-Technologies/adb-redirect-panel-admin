import "./App.css";
import React, { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Dashboard.jsx";
// import Offer from "./Components/Offers/Offer.jsx";
// import GlobalCondition from "./Components/GlobalCondition.jsx";
// import Navbar from "./Layout/Navbar.jsx";
// import Report from "./Components/Reports/Report.jsx";
// import AddOffer from "./Components/Offers/Addoffer/AddOffer.jsx";
// import General from "./Components/Offers/Addoffer/General.jsx";
// import Locations from "./Components/Offers/Addoffer/Locations.jsx";
// import Tracking from "./Components/Offers/Addoffer/Tracking.jsx";
// import AdbFroud from "./Components/Offers/Addoffer/AdbFroud.jsx";
import { ToastContainer } from "react-toastify";
import authProtectedRoutes from "./Routes/routes";
import Login from "./Pages/Login/Login.jsx";
import "./Assets/Scss/index.scss";

function App() {
  const privateRoutes = useMemo(
    () =>
      authProtectedRoutes.map(({ component: Component, path }, key) => (
        <Route
          path={path}
          key={key}
          element={
            localStorage.getItem("token") ? (
              <Navigate to={{ pathname: "/login" }} />
            ) : (
              <Component />
            )
          }
        />
      )),
    []
  );

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="colored"
      />
      {!localStorage.getItem("token") ? (
        <Routes>{privateRoutes}</Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={{ pathname: "/login" }} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

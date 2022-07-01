import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AddOffer = () => (
  <div className="addoffer-wrapper" style={{ marginTop: "55px" }}>
    <div className="nav-wrapper">
      <nav className="tabs-style navbar-expand-lg">
        <div className="ml-3 navbar-collapse">
          <div className="navbar-nav col-6">
            <NavLink className="link" to="/admin/offers/addoffer/">
              General
            </NavLink>
            <NavLink className="link" to="/admin/offers/addoffer/locations">
              Location
            </NavLink>
            <NavLink className="link" to="/admin/offers/addoffer/tracking">
              Tracking
            </NavLink>
            <NavLink className="link" to="/admin/offers/addoffer/adbFroud">
              Adb Froud Detection Service
            </NavLink>
          </div>
          <div className="col-6 align-end">
            <button className="btn btn-success">Save</button>
          </div>
        </div>
      </nav>
    </div>
    <section className="addlink">
      <Outlet />
    </section>
  </div>
);

export default AddOffer;

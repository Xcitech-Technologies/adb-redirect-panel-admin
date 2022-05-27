import React from "react";
import { Link, Outlet } from "react-router-dom";

const AddOffer = () => {
  return (
    <div className="addoffer-wrapper" style={{marginTop: "55px"}}>
      <div className="nav-wrapper">
        <nav className="tabs-style navbar-expand-lg">
          <div className="ml-3 navbar-collapse">
            <div className="navbar-nav col-6">
              <Link to="/admin/offers/addoffer/">General</Link>
              <Link to="/admin/offers/addoffer/locations">Location</Link>
              <Link to="/admin/offers/addoffer/tracking">Tracking</Link>
              <Link to="/admin/offers/addoffer/adbFroud">
                Adb Froud Detection Service
              </Link>
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
};

export default AddOffer;

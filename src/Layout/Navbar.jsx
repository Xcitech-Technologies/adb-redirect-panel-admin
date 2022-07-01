import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.jsx";

const Navbar = () => (
  <>
    <Nav className="navbar">
      <NavLink to="/admin/dashboard">
        <img src="/logo.png" alt="Logo" width="40" height="50" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/offers">Offer</NavLink>
        <NavLink to="/admin/globalconditions">Global Condition</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/">
          <FaSignOutAlt />
        </NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);
export default Navbar;

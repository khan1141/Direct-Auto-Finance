/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo1.jpg";
import { navItems } from "./Navitems";

function NavvBarr() {
  return (
    <nav className="bg-white h-20">
      <div className="h-full mx-20 px-20">
        <Link to="/">
          <img
            className="flex align-items h-full justify-between ml-5"
            src={Logo}
            alt="DirectAutoFinance"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavvBarr;
//flex justify-center items-center justify-between

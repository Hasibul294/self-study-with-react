import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/logo.png";
const Header = () => {
  return (
    <div>
      <div className="bg-green-200 py-4 flex text-4xl justify-center items-center">
        <img className="w-14 mx-2" src={img} alt="" />
        <h2 className="font-serif">
          <span className="text-green-500">Self</span> Study
        </h2>
      </div>
      <nav className="text-xl p-8 uppercase">
        <NavLink className="mr-6 hover:text-yellow-500" to="/home">
          Home
        </NavLink>
        <NavLink className="mr-6 hover:text-yellow-500" to="/course">
          Course
        </NavLink>
        <NavLink className="mr-6 hover:text-yellow-500" to="/faculty">
          Faculty
        </NavLink>
        <NavLink className="mr-6 hover:text-yellow-500" to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

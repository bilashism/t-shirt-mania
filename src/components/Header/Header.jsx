import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeClass = "text-red-600";
  return (
    <nav className="container mx-auto flex flex-wrap justify-center items-center gap-4 text-xl uppercase">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          (isActive ? activeClass : undefined) + " transition "
        }>
        home
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          (isActive ? activeClass : undefined) + " transition "
        }>
        orders
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          (isActive ? activeClass : undefined) + " transition "
        }>
        about
      </NavLink>
    </nav>
  );
};

export default Header;

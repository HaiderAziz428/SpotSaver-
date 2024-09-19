import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className={`${props.class}`}>
      <li className="text-white font-marker ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 ${isActive ? "bg-yellow-500" : "hover:bg-yellow-400"}`
          }
        >
          ALL USERS
        </NavLink>
      </li>
      <li className="text-white font-marker ">
        <NavLink
          to="/u1/places"
          className={({ isActive }) =>
            `p-3 ${isActive ? "bg-yellow-500" : "hover:bg-yellow-400"}`
          }
        >
          MY PLACES
        </NavLink>
      </li>
      <li className="text-white font-marker ">
        <NavLink
          to="/places/new"
          className={({ isActive }) =>
            `p-3 ${isActive ? "bg-yellow-500" : "hover:bg-yellow-400"}`
          }
        >
          ADD PLACE
        </NavLink>
      </li>
      <li className="text-white font-marker ">
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `p-3 ${isActive ? "bg-yellow-500" : "hover:bg-yellow-400"}`
          }
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

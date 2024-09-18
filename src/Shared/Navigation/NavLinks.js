import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className={`${props.class}`}>
      <li>
        <NavLink to="/" className="text-white" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" className="text-white">
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" className="text-white">
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" className="text-white">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

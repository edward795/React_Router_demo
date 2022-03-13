// import { Link } from "react-router-dom";
// import "./NavBar.css";

// import React from "react";

// export const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//     </div>
//   );
// };

import { NavLink } from "react-router-dom";
import "./NavBar.css";

import React from "react";
import { useAuth } from "./Auth";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
      fontWeight: isActive ? "bold" : "strong",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const auth = useAuth();

  return (
    <div>
      <nav className="navbar">
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/products">
          products
        </NavLink>
        <NavLink style={navLinkStyles} to="/profile">
          profile
        </NavLink>
        {!auth.user && (
          <NavLink style={navLinkStyles} to="/login">
            login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

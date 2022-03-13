import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Products = () => {
  return (
    <div style={{ background: "#555", color: "#fff" }}>
      <input type="search" placeholder="search products" />
      <nav>
        <Link
          style={{
            textDecoration: "#none",
            color: "#fff",
            marginRight: "10px",
          }}
          to="featured"
        >
          featured
        </Link>
        <Link style={{ textDecoration: "#none", color: "#fff" }} to="new">
          new
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

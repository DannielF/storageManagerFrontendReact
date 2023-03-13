import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Nav;

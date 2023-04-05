import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout;
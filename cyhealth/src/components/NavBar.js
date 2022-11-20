import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
          <h1>CYHEALTH</h1>
          <p><em>Covid19 analysis system</em></p>
          <NavLink
          to={"/"}
          activeStyle={{color: "orange"}}
          >
            Home
          </NavLink>

          <NavLink
          to={"/History"}
          activeStyle={{color: "orange"}}
          >
            History
          </NavLink>

       </nav>

    )
}

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";

const header =()=>{
    return <div>

<ul className="list-style ds-flex-sb ds-flex-wramp" style={{padding:0}}>
        <li>
          <NavLink activeclassname="test" className="" end to="/">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="test" className="" end to="/history">
              History
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="test" className="" end to="/contact">
              Contact
          </NavLink>
        </li>
      </ul>
    </div>
}
export default header;
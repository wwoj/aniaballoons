import React from "react";
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../Pictures/AniaBalloons_Logo.png'

const header =(props)=>{
    
    return (
      <div>
      <div>{props.t("WelcomeText")}</div>

        <ul>
          <li>
            <NavLink activeclassname="test" className="" end to="/">
            <img src={AniasBalloonLogo} alt="Anias Balloon Logo image"/>
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="test" className="" end to="/history">
              {props.t("PageHistory")}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="test" className="" end to="/contact">
            {props.t("PageContact")}

            </NavLink>
          </li>
          <li>Switch</li>
        </ul>
      </div>
    );
}
export default header;
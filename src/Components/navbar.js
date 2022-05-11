import React from "react";
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../Pictures/AniaBalloons_Logo.png'

const header =(props)=>{
    
    return (
      <section className="navbar-container ds-flex-sb">
        <ul className="navbar-list">
          <li>
            <NavLink activeclassname="test" className="" end to="/">
              <img
                className="logo-size"
                src={AniasBalloonLogo}
                alt="Anias Balloon Logo image"
              />
            </NavLink>
          </li>
        </ul>
        <ul
          className="navbar-list ds-flex-sb"
          onChange={(e) => {
            let language = e.target.value.toLowerCase();
            props.i18n.changeLanguage(language);
          }}
        >
            <li className="nav-button">
            <NavLink activeclassname="test" className="" end to="/balloons">
              {props.t("PageBalloons")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink activeclassname="test" className="" end to="/walls">
              {props.t("PageWalls")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink activeclassname="test" className="" end to="/contact">
              {props.t("PageContact")}
            </NavLink>
          </li>
          <li>
            <select>
              <option>EN</option>
              <option>PL</option>
            </select>
          </li>
        </ul>
      </section>
    );
}
export default header;
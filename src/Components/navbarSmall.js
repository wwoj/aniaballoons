import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

import AniasBalloonLogo from "../Pictures/AniaBalloons_Logo.png";
const NavbarSmall =(props)=>{
    const [display, setDisplay] = useState(false);
    const switchMenuVisibility = function(){
        setDisplay(!display);
    }
    return (
      <div className='navbar-small-header'>
        <ul className="navbar-list ds-flex-sb">
          <li>
            <NavLink className="" end to="/">
              <img
                className="logo-size"
                src={AniasBalloonLogo}
                alt="Anias Balloon Logo image"
              />
            </NavLink>
          </li>
          <li>
            <div
              onClick={() => {
                setDisplay(!display);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="3x" />
            </div>
          </li>
        </ul>
        <div
          className="navbar-small-container"
          style={{ display: display ? "" : "none" }}
        >
          <ul
            className="navbar-list "
            onChange={(e) => {
              let language = e.target.value.toLowerCase();
              props.i18n.changeLanguage(language);
            }}
          >
            <li className="nav-button">
              <div onClick={switchMenuVisibility}>
                <FontAwesomeIcon icon={faCircleArrowUp} size="3x" />
              </div>
            </li>
            <li className="nav-button" >
              <NavLink className="" end to="/" onClick={switchMenuVisibility}>
                Home
              </NavLink>
            </li>
            <li className="nav-button" >
              <NavLink className="" end to="/animalballoons" onClick={switchMenuVisibility}>
                {props.t("PageBalloons")}
              </NavLink>
            </li>
            <li className="nav-button" >
              <NavLink className="" end to="/photobackdrops" onClick={switchMenuVisibility}>
                {props.t("PageWalls")}
              </NavLink>
            </li>
            <li className="nav-button" >
              <NavLink className="" end to="/contact" onClick={switchMenuVisibility}>
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
        </div>
      </div>
    );
}
export default NavbarSmall;
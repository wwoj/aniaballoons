import React from 'react'
import { NavLink } from "react-router-dom";


import Picture1 from '../Pictures/1-eng.png'
import Picture2 from '../Pictures/2-eng.png'
import '../Styles/galleryButtonSection.scss';



const GalleryButton = (props) => {
    return (
      <section className="gallery-buttons-section">
        <div className="gallery-button">
          <NavLink className="" end to="/animalballoons">
            <img src={Picture1} />
          </NavLink>
        </div>
        <div className="gallery-button">
          <NavLink className="" end to="/photobackdrops">
          <img src={Picture2} />
          </NavLink>

        </div>
      </section>
    );
}
export default GalleryButton;


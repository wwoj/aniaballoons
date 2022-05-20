import React from 'react'
import { NavLink } from "react-router-dom";


import PictureUS_1 from '../Pictures/Button_1EN.JPG'
import PicturePL_1 from '../Pictures/Button_1PL.JPG'
import PictureUS_2 from '../Pictures/Button_2EN.JPG'
import PicturePL_2 from '../Pictures/Button_2PL.JPG'
import '../Styles/galleryButtonSection.scss';

const GalleryButton = (props) => {
  return (
    <section className="gallery-buttons-section">
      <div className="gallery-button">
        <NavLink className="" end to="/animalballoons">
          <img src={props.i18n.language == "us" ? PictureUS_1 : PicturePL_1} />
        </NavLink>
      </div>
      <div className="gallery-button">
        <NavLink className="" end to="/photobackdrops">
          <img src={props.i18n.language == "us" ? PictureUS_2 : PicturePL_2} />
        </NavLink>
      </div>
    </section>
  );
};
export default GalleryButton;


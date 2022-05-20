import React from 'react';

import GalleryButton from '../Components/galleryButton';

import Carousel1 from '../Components/carouser';



const Home = (props) => {
  return (
    <section className="home-container">
      <div style={{width:"100%"}} >
        {/* <img className="w-100" src={MainPhoto} alt="Home picture" /> */}
        <Carousel1 t={props.t} />
      </div>

      <div className="home-text">
        <p>{props.t("HomeText1")}</p>
        <p>{props.t("HomeText2")}</p>
        <p>{props.t("HomeText3")}</p>
        <p>{props.t("HomeText4")}</p>
      </div>
      <GalleryButton  t={props.t} i18n={props.i18n}/>
    </section>
  );

}
export default Home;
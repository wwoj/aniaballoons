import React from 'react';

import MainPhoto from '../Pictures/1-zolty.JPG'

import backgroundText from '../Pictures/backgroundText.jpg'
import GaleryButton from '../Components/galeryButton';

import BallonsContainer from '../Components/TableBallons';

const home = (props)=>{
    return (
      <section className="home-container">
        <div className="ds-flex-sb home-img-container align-center">
          <img className="w-100" src={MainPhoto} alt="Home picture" />
        </div>

        <div className="home-text">
          <p>{props.t("HomeText1")}</p>
          <p>{props.t("HomeText2")}</p>
          <p>{props.t("HomeText3")}</p>
          <p>{props.t("HomeText4")}</p>
        </div>
        <div className='ds-flex-sb'>
        <GaleryButton/>
        <GaleryButton/>

        </div>
        <div>Container for the vew picture in small boxes</div>
      </section>
    );
}
export default home;
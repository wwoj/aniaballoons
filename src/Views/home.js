import React from 'react';
import MainPhoto from '../Pictures/1.JPG'
import backgroundText from '../Pictures/backgroundText.jpg'

import BallonsContainer from '../Components/TableBallons';

const home = (props)=>{
    return (
      <section className="home-container">
        <div className="ds-flex-sb home-img-container align-center">
          <img className="w-100" src={MainPhoto} alt="Home picture" />
        </div>
        
        <div className=" w-100 home-text">
        <div className=" w-100 home-text-background" style={{  height:"100%",backgroundImage: `url(${backgroundText})` }}></div>
        <div className='home-text-pos'>
          <p>{props.t("HomeText1")}</p>
          <p>{props.t("HomeText2")}</p>
          <p>{props.t("HomeText3")}</p>
          <p>{props.t("HomeText4")}</p>
            {/* <img src={backgroundText} alt=""/> */}</div>
        </div>
        <BallonsContainer/>
        <div>Container for the vew picture in small boxes</div>
      </section>
    );
}
export default home;
import React from 'react';
import PictureCard from './PictureCard';
import Bal1 from '../Pictures/bal_1.png'
import Bal2 from '../Pictures/bal_2.png'
import Bal3 from '../Pictures/bal_3.png'
import Bal4 from '../Pictures/bal_4.png'
import Bal5 from '../Pictures/bal_5.png'
import Bal6 from '../Pictures/bal_6.png'




const BallonsContainer = (props)=>{
    return (
      <div>
        <PictureCard picture={Bal6} title="Balloons 1" />
        <PictureCard picture={Bal5} title="Balloons 1" />
        <PictureCard picture={Bal3} title="Balloons 1" />
        <PictureCard picture={Bal4} title="Balloons 1" />
      </div>
    );

}

export default BallonsContainer;
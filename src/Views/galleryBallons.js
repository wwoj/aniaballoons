import React, {useState} from 'react';
import PictureCard from '../Components/PictureCard';
import MainPhoto1 from '../Pictures/bal_1.png'
import MainPhoto2 from '../Pictures/bal_2.png'
import MainPhoto3 from '../Pictures/bal_3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight,faXmark } from '@fortawesome/free-solid-svg-icons'



const pictable = ['bal_1.jpg','bal_2.jpg','bal_3.jpg','bal_4.jpg','bal_5.jpg','bal_6.jpg',
'bal_7.jpg','bal_8.jpg','bal_9.jpg','bal_10.jpg','bal_11.jpg','bal_12.jpg','bal_13.jpg','bal_14.jpg',
'bal_15.jpg','bal_16.jpg','bal_17.jpg','bal_18.jpg','bal_19.jpg','bal_20.jpg','bal_21.jpg','bal_22.jpg','bal_23.jpg','bal_24.jpg']
function GalleryWalls() {
  const [showGalery, setShowGalery] = useState(false);
  const [picId, setPictureId] = useState(0);


  let finArray = pictable.map((x,i) => {
    return <img src={x} alt="testww" data-id={i} />;
  });
  let finArray1 = pictable.map((x,i) => {
    let address = "../Pictures/Ballons/"+x
    return <PictureCard picture={MainPhoto1} picAddress={address} id={i} setShowGalery={setShowGalery} setPictureId={setPictureId}/>;
  });
  return (
    <div className="galery-page">
      <div
        className="gallery-full-view "
        style={{ display: showGalery ? "" : "none" }}
      >
     
        <div className='gallery-view-button-nav galery-view-close'
           onClick={() => {
            setShowGalery(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="3x" />
        </div>
        <div className='gallery-view-button-nav'
          onClick={() => {
            if (picId <= 0) {
              setPictureId(pictable.length - 1);
            } else {
              setPictureId(picId - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="3x" />
        </div>
        <div className="galery-full-view-container">
          <img src={"../Pictures/Ballons/"+pictable[picId]} alt="asd" />
        </div>
        <div className='gallery-view-button-nav'
          onClick={() => {
            if (picId == pictable.length - 1) {
              setPictureId(0);
            } else {
              setPictureId(picId + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} size="3x" />
        </div>
      </div>
      
      <div className="galery-container">{finArray1}</div>
    </div>
  );
}
export default GalleryWalls;
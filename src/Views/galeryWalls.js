import React, {useState} from 'react';
import PictureCard from '../Components/PictureCard';
import MainPhoto1 from '../Pictures/bal_1.png'
import MainPhoto2 from '../Pictures/bal_2.png'
import MainPhoto3 from '../Pictures/bal_3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight,faXmark } from '@fortawesome/free-solid-svg-icons'



const pictable = ['../Pictures/Walls/wal_1.jpg','../Pictures/Walls/wal_2.jpg','../Pictures/Walls/wal_3.jpg','../Pictures/Walls/wal_4.jpg'
,'../Pictures/Walls/wal_5.jpg','../Pictures/Walls/wal_6.jpg','../Pictures/Walls/wal_7.jpg','../Pictures/Walls/wal_8.jpg','../Pictures/Walls/wal_9.jpg'
,'../Pictures/Walls/wal_10.jpg']
function GalleryWalls() {
  const [showGalery, setShowGalery] = useState(false);
  const [picId, setPictureId] = useState(0);


  let finArray = pictable.map((x,i) => {
    return <img src={x} alt="testww" data-id={i} />;
  });
  let finArray1 = pictable.map((x,i) => {
    return <PictureCard picture={MainPhoto1} picAddress={x} id={i} setShowGalery={setShowGalery} setPictureId={setPictureId}/>;
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
          <img src={pictable[picId]} alt="asd" />
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
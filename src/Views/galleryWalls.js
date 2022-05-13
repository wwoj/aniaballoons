import React, {useState} from 'react';
import PictureCard from '../Components/PictureCard';
import MainPhoto1 from '../Pictures/bal_1.png'
import MainPhoto2 from '../Pictures/bal_2.png'
import MainPhoto3 from '../Pictures/bal_3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight,faXmark } from '@fortawesome/free-solid-svg-icons'

import Walls from '../Pictures/PictureWalls';



function GalleryWalls() {
  const [showGalery, setShowGalery] = useState(false);
  const [picId, setPictureId] = useState(0);

  const wallBallons = Walls.map((x, i) => {
    return (
      <PictureCard
        picture={x.obj}
        alt={x.title}
        id={i}
        setShowGalery={setShowGalery}
        setPictureId={setPictureId}
      />
    );
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
              setPictureId(Walls.length - 1);
            } else {
              setPictureId(picId - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="3x" />
        </div>
        <div className="galery-full-view-container">
          <img src={Walls[picId].obj} alt={Walls[picId].title} />
        </div>
        <div className='gallery-view-button-nav'
          onClick={() => {
            if (picId == Walls.length - 1) {
              setPictureId(0);
            } else {
              setPictureId(picId + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} size="3x" />
        </div>
      </div>
      
      <div className="galery-container">{wallBallons}</div>
    </div>
  );
}
export default GalleryWalls;
import React, {useState} from 'react';
import PictureCard from '../Components/PictureCard';
import MainPhoto1 from '../Pictures/bal_1.png'
import MainPhoto2 from '../Pictures/bal_2.png'
import MainPhoto3 from '../Pictures/bal_3.png'



const pictable = ['../Pictures/Walls/wal_1.jpg','../Pictures/Walls/wal_2.jpg','../Pictures/Walls/wal_3.jpg','../Pictures/Walls/wal_4.jpg'
,'../Pictures/Walls/wal_5.jpg','../Pictures/Walls/wal_6.jpg','../Pictures/Walls/wal_7.jpg','../Pictures/Walls/wal_8.jpg','../Pictures/Walls/wal_9.jpg'
,'../Pictures/Walls/wal_10.jpg']
function GalleryWalls() {
  const [count, setCount] = useState(0);

  let finArray = pictable.map((x) => {
    return <img src={x} alt="testww" />;
  });
  let finArray1 = pictable.map((x) => {
    return <PictureCard picture={MainPhoto1} picAddress={x} />;
  });
  return (
    <div className="galery-page">
      <div
        className={
          count < 10 ? "gallery-full-view hide-component" : "gallery-full-view "
        }
      >
        Full view here
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Click me
        </button>
      </div>
      test me {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <div className="galery-container">{finArray1}</div>
    </div>
  );
}
export default GalleryWalls;
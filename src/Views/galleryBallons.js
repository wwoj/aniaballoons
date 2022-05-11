import React from 'react';
import PictureCard from '../Components/PictureCard';
import MainPhoto1 from '../Pictures/bal_1.png'
import MainPhoto2 from '../Pictures/bal_2.png'
import MainPhoto3 from '../Pictures/bal_3.png'

const pictable = ['bal_1.jpg','bal_2.jpg','bal_3.jpg','bal_4.jpg','bal_5.jpg','bal_6.jpg','bal_7.jpg','bal_8.jpg','bal_9.jpg','bal_10.jpg',
'bal_11.jpg','bal_12.jpg','bal_13.jpg','bal_14.jpg','bal_15.jpg','bal_16.jpg','bal_17.jpg','bal_18.jpg','bal_19.jpg','bal_20.jpg','bal_21.jpg','bal_22.jpg','bal_23.jpg',]
const GalleryBallons = ()=>{

    let finArray1 = pictable.map(x=>{
 
      let address = "../Pictures/Ballons/"+x
      console.log("address",address)

        return <PictureCard picture={MainPhoto1} picAddress={address}/>
    })
  return (
    <div className='galery-page'> 
      {/* <div> powiekszenie obrazka :)</div> */}
      <div className="galery-container" >
        {/* <PictureCard picture={MainPhoto1}/> */}
    
        {/* <PictureCard picture={MainPhoto2}/> */}
         
          {finArray1}
      </div>
    </div>
  );
}
export default GalleryBallons;
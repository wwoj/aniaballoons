import React from 'react';

const PictureCard = (props)=>{
    return (
      <div className="card-picture">
        <div className="">
            <img className='galery-picture' src={props.picAddress} alt='Ballon picture smaall'/>
        </div>
        
      </div>
    );
}
export default PictureCard;
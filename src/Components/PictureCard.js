import React from 'react';

const PictureCard = (props)=>{
    return (
      <div className="card-picture">
        <div className="card-picture-img">
            <img src={props.picture} alt='Ballon picture smaall'/>
        </div>
        <div className="card-text">
            <span>{props.title}</span>
        </div>
      </div>
    );
}
export default PictureCard;
import React from 'react';

const PictureCard = (props)=>{
  const clickPict = (data)=>{
    const idValue = data.target.getAttribute("data-id");
    props.setPictureId(parseInt(idValue));
    props.setShowGalery(true);
  }
    return (
      <div className="card-picture">
        <div className="card-picture-container" data-id={props.id} onClick={clickPict} >
            <img className='galery-picture' data-id={props.id} src={props.picAddress} alt='Ballon picture smaall'/>
        </div>
        
      </div>
    );
}
export default PictureCard;
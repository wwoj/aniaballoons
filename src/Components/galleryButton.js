import React from 'react'


import Picture1 from '../Pictures/1-eng.png'
import Picture2 from '../Pictures/2-eng.png'
import '../Styles/galleryButtonSection.scss';



const GalleryButton = (props) => {
    return (

        <section className="gallery-buttons-section">

            <div className='gallery-button'>
                <img src={Picture1} />
            </div>
            <div className='gallery-button'>
                <img src={Picture2} />
            </div>
        </section>
        
    )
}
export default GalleryButton;


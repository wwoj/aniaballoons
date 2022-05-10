import React from 'react';
import MainPhoto from '../Pictures/1.JPG'

const home = ()=>{
    return (
      <section className='home-container'>
        <div className='ds-flex-sb home-img-container align-center'>
            <img className='w-100' src={MainPhoto} alt='Home picture'/>
        </div>
        <div>Container for the text from Anna</div>
        <div>Container for the vew picture in small boxes</div>
      </section>
    );
}
export default home;
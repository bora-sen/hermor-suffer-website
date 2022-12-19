import localstyle from './photo-collage.module.css';
import React from 'react';
import dataset from '../../dataset.json'

function PhotoCollage() {
    const collagePhotos = dataset.categories;
    
  return (
    <section>
      <div className={localstyle.images}>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[0].img_url} alt="Left"/>
        </div>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[1].img_url} alt="Center"/>
        </div>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[2].img_url} alt="Right"/>
        </div>
      </div>
      <div className={localstyle.quote_section}>
        <h3 className={localstyle.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum nesciunt dicta</h3>
      </div>
    </section>
  )
}

export default PhotoCollage
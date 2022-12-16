import localstyle from './photo-collage.module.css'
import React from 'react'

function PhotoCollage() {
    const collagePhotos = [
    {id:1,image_url:"https://loremflickr.com/1000/1000/1"},
    {id:2,image_url:"https://loremflickr.com/1000/1000/2"},
    {id:3,image_url:"https://loremflickr.com/1000/1000/3"}
    ];
    
  return (
    <section>
      <div className={localstyle.images}>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[0].image_url} alt="Image Left"/>
        </div>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[1].image_url} alt="Image Center"/>
        </div>
        <div className={localstyle.image_div}>
          <img src={collagePhotos[2].image_url} alt="Image Right"/>
        </div>
      </div>
    </section>
  )
}

export default PhotoCollage
import localstyle from './photo-collage.module.css';
import React from 'react';

function PhotoCollage() {
  return (
    <section className={localstyle.photo_collage}>
      <div className={localstyle.gif}>
        <video muted autoPlay loop>
        <source src='http://bborasen.com/video/hermor-video3.mp4' />
        </video> 
      </div>
    </section>
  )
}

export default PhotoCollage
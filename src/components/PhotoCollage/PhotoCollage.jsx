import localstyle from './photo-collage.module.css';
import React from 'react';
import img from '../../images/hero.gif'

function PhotoCollage() {
  return (
    <section className={localstyle.photo_collage}>
      <div className={localstyle.gif}>
        <img src={img} alt="" />
      </div>
      <h2 className={localstyle.welcome}>Welcome To Official HERMORSUFFER Website</h2>
    </section>
  )
}

export default PhotoCollage
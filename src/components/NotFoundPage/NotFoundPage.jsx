import React from 'react';
import local_style from './not-found.module.css';

function NotFoundPage() {
  return (
    <div className={local_style.background}>
      <h4 className={local_style.Text}>404 NOT FOUND</h4>
      <a href="/" className={local_style.Text2}>Navigate to Home</a>
      </div>
  )
}

export default NotFoundPage
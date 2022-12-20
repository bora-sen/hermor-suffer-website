import React from 'react';
import localstyle from './footer.module.css';

function Footer() {
  return (
    <>
      <section className={localstyle.footer}>
        <div className={localstyle.brand}>
          <p>HERMOR SUFFER </p>
        </div>
        <ul className={localstyle.links}>
          <li className={localstyle.link}><a href="/">Home</a></li>
          <li className={localstyle.link}><a href="/">Home</a></li>
          <li className={localstyle.link}><a href="/">Home</a></li>
        </ul>
      </section>
      <section className={localstyle.info}>
        <p>© 2022 HERMORSUFFER TR, Inc. All rights reserverd.</p>
      </section>
    </>
  )
}

export default Footer
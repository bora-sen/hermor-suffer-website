import React from 'react';
import localstyle from './footer.module.css';

function Footer() {
  return (
    <>
      <section className={localstyle.footer}>
        <div className={localstyle.brand}>
          <p>HERMOR SUFFER</p>
        </div>
        <div className={localstyle.navlinks}>
          <h4 className={localstyle.navheader}>Links</h4>
          <div className={localstyle.links}>
          <p className={localstyle.link}>Home</p>
          <p className={localstyle.link}>Home</p>
          <p className={localstyle.link}>Home</p>
          <p className={localstyle.link}>Home</p>
          </div>
        </div>
      </section>
      <section className={localstyle.info}>
        <p>© 2022 HERMORSUFFER TR, Inc. All rights reserverd.</p>
      </section>
    </>
  )
}

export default Footer
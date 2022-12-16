import React from 'react'
import localstyle from './footer.module.css'

function Footer() {
  return (
    <section className={localstyle.footer}>
        <div className={localstyle.links_section}>
          <ul className={localstyle.links_list}>
            <li className={localstyle.link}>Instagram</li>
            <li className={localstyle.link}>Instagram</li>
            <li className={localstyle.link}>Instagram</li>
          </ul>
        </div>
        <div className={localstyle.links_section}>
          <ul className={localstyle.links_list}>
            <li className={localstyle.link}>Instagram</li>
            <li className={localstyle.link}>Instagram</li>
            <li className={localstyle.link}>Instagram</li>
          </ul>
        </div>
    </section>
  )
}

export default Footer
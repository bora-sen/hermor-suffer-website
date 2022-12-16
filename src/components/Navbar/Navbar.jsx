import React from 'react'
import localstyle from './navbar.module.css'

function Navbar() {
  return (
    <nav className={localstyle.navbar}>
      <h1 className={localstyle.brand}>HERMOR SUFFER</h1>
      <ul className={localstyle.menu_el}>
        <li className={localstyle.menu_li}><a href="#" className={localstyle.anchors}>T-shirts</a></li>
        <li className={localstyle.menu_li}><a href="#" className={localstyle.anchors}>Sweatshirts</a></li>
        <li className={localstyle.menu_li}><a href="#" className={localstyle.anchors}>Pants</a></li>
        <li className={localstyle.menu_li}><a href="#" className={localstyle.anchors}>Bikini</a></li>
      </ul>
    </nav>
  )
}
export default Navbar
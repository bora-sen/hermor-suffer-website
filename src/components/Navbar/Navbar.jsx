import React from 'react'
import localstyle from './navbar.module.css'

function Navbar() {
  return (
    <nav className={localstyle.navbar}>
      <h1 className={localstyle.brand}>HERMOR SUFFER</h1>
    </nav>
  )
}
export default Navbar
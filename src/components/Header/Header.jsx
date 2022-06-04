import React, { useState } from 'react'

import "./Header.css"

export default function Header() {

  const [active, setActive] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  console.log(showMenu);
  const openMenu = () => {
    setShowMenu(!showMenu)
  }

  const activeLink = (e) => {
    e.preventDefault()
    setActive(e.target.textContent);
  }
  return (
    <div className='header-site'>
      <div className="container">
        <div className="header-site-content">
          <a href="/" className="logo-link">
            <img src="./images/logo.jpg" alt="logo_site" className="logo-img" />
          </a>

          <nav className={showMenu ? 'navbar-site menu-open' : 'navbar-site'}>
            <a onClick={activeLink} href="/" className={active === 'Home' ? 'navbar-link active-link' : 'navbar-link'}>Home</a>
            <a onClick={activeLink} href="/about" className={active === 'About Us' ? 'navbar-link active-link' : 'navbar-link'}>About Us</a>
            <a onClick={activeLink} href="/services" className={active === 'Our Services' ? 'navbar-link active-link' : 'navbar-link'}>Our Services</a>
            <a onClick={activeLink} href="/resp" className={active === 'Responsibilities' ? 'navbar-link active-link' : 'navbar-link'}>Responsibilities</a>
            <a onClick={activeLink} href="/country" className={active === 'Country' ? 'navbar-link active-link' : 'navbar-link'}>Country</a>
          </nav>

          <button type='button' className="header-btn">Apply</button>
          <button onClick={openMenu} type='button' className="header-btn menu-btn">Menu</button>
        </div>
      </div>
    </div>
  )
}

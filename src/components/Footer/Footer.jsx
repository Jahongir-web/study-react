import React from 'react'
import Button from '../../components/MainBtn/Button.jsx'

import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer-site'>
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-top-heading">Ready to chase your dreams?</h2>
          <Button text="Apply Online"/>
        </div>        
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <a href="/" className="footer-logo-link">
                <img src="./images/logo-footer.png" alt="logo_site" className="footer-logo" />
              </a>
              <p className="footer-bottom-left-text">
              Concord Royal Court (3rd floor)
              Dhanmondi, Dhaka 1209, Bangladesh.
              </p>
            </div>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">About Us</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Responsibilities</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Our Services</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-policy">
            <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Disclaimer</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Testimonials</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Privacy Policy</a>
                </li>
                <li className="footer-menu-item">
                  <a href="" className="footer-menu-link">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-right">
              <ul className="footer-social-list">
                <li className="footer-social-item">
                  <a href="" className="footer-social-link">
                    <img src="./images/facebook-white.png" alt="facebook" className="footer-social-icon" />
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="" className="footer-social-link">
                    <img src="./images/twitter-white.png" alt="twitter" className="footer-social-icon" />
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="" className="footer-social-link">
                    <img src="./images/instagram-white.png" alt="instagram" className="footer-social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-bottom-text">© 2020 Executive Trade International</p>
        </div>
          
      </div>
    </div>
  )
}

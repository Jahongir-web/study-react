import React from 'react'
import Button from '../MainBtn/Button'

import "./Main.css"

export default function Main() {
  return (
    <div className='main-site'>
      <div className="container">
        <div className="main-content">
          <h1 className='main-heading'>We Help to <span className='blue-span'>Build</span>  <br/>
          Your Dream</h1>
          <p className="main-text">We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the</p>

          <Button text='Apply Online'/>

          <ul className="main-links">
            <li className="main-links-item"><img className='social-icon-fb' src="./images/facebook.png" alt="facebook_icon" /></li>
            <li className="main-links-item"><img className='social-icon' src="./images/twitter.png" alt="twitter_icon" /></li>
            <li className="main-links-item"><img className='social-icon' src="./images/instagram.png" alt="instagram_icon" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

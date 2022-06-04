import React from 'react'

import "./Universities.css"

export default function Universities() {
  return (
    <div className='univer-field'>
      <div className="container">
        <h3 className="univer-heading">Featured Universities</h3>
        <ul className="univer-list">
          <li className="univer-item"><img src="./images/mackquare.png" alt="logo_university" className="univer-img" /></li>
          <li className="univer-item"><img src="./images/charles.png" alt="logo_university" className="univer-img" /></li>
          <li className="univer-item"><img src="./images/newcastle.png" alt="logo_university" className="univer-img" /></li>
          <li className="univer-item"><img src="./images/latrobe.png" alt="logo_university" className="univer-img" /></li>
        </ul>

        <div className="btn-box">
          <button className="univer-btn active-btn"></button>
          <button className="univer-btn"></button>
          <button className="univer-btn"></button>
          <button className="univer-btn"></button>
        </div>
      </div>
    </div>
  )
}

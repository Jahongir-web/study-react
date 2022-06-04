import React from 'react'

import "./Button.css"

export default function Button(props) {

  return (
    <>
      <button className="main-btn">{props.text} <img className='arrow-icon' src="./images/arrow.png" alt="arrow_icon" /></button>
    </>
  )
}

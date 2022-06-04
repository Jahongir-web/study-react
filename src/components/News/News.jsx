import React from 'react'
import Button from '../MainBtn/Button.jsx'

import "./News.css"

export default function News() {
  return (
    <div className='news-section'>
      <div className="container">
        <h2 className="services-heading">News</h2>
        <p className="services-text">Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</p>

        <ul className="news-list">
          <li className="news-item">
            <img src="./images/come-on.png" alt="news_image" className="news-img" />
            <span className="news-date">17 Apr 2020</span>
            <h4 className="news-item-heading">Come On In. The Water’s Fine (Mostly).</h4>
          </li>
          <li className="news-item">
            <img src="./images/trump.png" alt="news_image" className="news-img" />
            <span className="news-date">17 Apr 2020</span>
            <h4 className="news-item-heading">Trump Lays Plans to Reverse Obama’s Climate Change </h4>
          </li>
          <li className="news-item">
            <img src="./images/how-a.png" alt="news_image" className="news-img" />
            <span className="news-date">17 Apr 2020</span>
            <h4 className="news-item-heading">How a Little Bit of Hydra Regrows a Whole Animal</h4>
          </li>
        </ul>
        <div className='news-btn-box'>
          <Button text={'Join Here'}/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import "./Services.css"

export default function Services() {
  return (
    <div className='services-section'>
      <div className="container">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-text">Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!</p>

        <ul className="services-list">
          <li className="services-item">
            <h3 className="services-item-heading">Career Counselling</h3>
            <p className="services-item-text">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
            <a href="" className="services-link">Learn More <img src="./images/arrow.png" alt="arrow_icon" className="services-arrow-img" /></a>
          </li>
          <li className="services-item">
            <h3 className="services-item-heading">University Admissions</h3>
            <p className="services-item-text">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
            <a href="" className="services-link">Learn More <img src="./images/arrow.png" alt="arrow_icon" className="services-arrow-img" /></a>
          </li>
          <li className="services-item">
            <h3 className="services-item-heading">Visa Consultancy</h3>
            <p className="services-item-text">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
            <a href="" className="services-link">Learn More <img src="./images/arrow.png" alt="arrow_icon" className="services-arrow-img" /></a>
          </li>
          <li className="services-item">
            <h3 className="services-item-heading">Accommodation</h3>
            <p className="services-item-text">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
            <a href="" className="services-link">Learn More <img src="./images/arrow.png" alt="arrow_icon" className="services-arrow-img" /></a>
          </li>
          <li className="services-item">
            <h3 className="services-item-heading">Pre-Departure Briefing</h3>
            <p className="services-item-text">Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
            <a href="" className="services-link">Learn More <img src="./images/arrow.png" alt="arrow_icon" className="services-arrow-img" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

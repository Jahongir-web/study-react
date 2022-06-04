import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import News from '../../components/News/News'
import Services from '../../components/Services/Services'
import Universities from '../../components/Univerities/Universities'

export default function Home() {
  return (
    <div className='home-page'>
      <Header/>
      <Main/>
      <Universities/>
      <Services/>
      <News/>
      <Footer/>
    </div>
  )
}

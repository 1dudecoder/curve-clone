import React from 'react'
import Calculator from '../calculator/Calculator'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'

function Main() {
  return (
    <div>
        <Navbar />
        <Header />
        <Calculator />
        <Footer />
    </div>
  )
}

export default Main
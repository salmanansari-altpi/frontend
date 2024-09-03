import React from 'react'
import Header from '../features/LandingPage/Header'
import SwiperComponent from '../features/LandingPage/SwiperComponent'
import Categories from '../features/LandingPage/Categories'
import Deal from '../features/LandingPage/Deal'
import OurHistory from '../features/LandingPage/OurHistory'
import Services from '../features/LandingPage/Services'
import Footer from '../features/LandingPage/Footer'
import ProductCard from '../features/LandingPage/ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';


function LandingPage() {

  return (
    <div>
    <Header/>
     <SwiperComponent/> 
    <Categories/>
    <ProductCard/>
    <Deal/>
    <OurHistory/>
    <Services/>
    <Footer/>

  
    </div>
  )
}

export default LandingPage
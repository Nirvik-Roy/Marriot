import React from 'react'
import Banner from './Banner.jsx'
import BestHotels from './BestHotels.jsx'
import Offer from './Offer.jsx'
import PopularCities from './PopularCities.jsx'
import BookWithConfidence from './BookWithConfidence.jsx'
import GuestsLove from './GuestsLove.jsx'
import TravelLibraries from './TravelLibraries.jsx'
import Testimonial from './Testimonial.jsx'
import Accordion3 from './Accordion3.jsx'
import Footer from '../Layout/Footer.jsx'

const Home = () => {
  return (
    <>
      <Banner/>
      <BestHotels/>
      <Offer/>
      <PopularCities/>
      <BookWithConfidence/>
      <GuestsLove/>
      <TravelLibraries/>
      <Testimonial/>
      <Accordion3/>
      <Footer/>
    </>
  )
}

export default Home

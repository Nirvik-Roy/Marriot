import React from 'react'
import Header from '../Layout/Header'
import './Home.css'
import plane from '../../assets/plane 1.png'
import hotels from '../../assets/plane 1 (2).png'
import train from '../../assets/plane 1 (3).png'
import ClientInformation from './ClientInformation'
const Banner = () => {
  return (
    <>
      <div className='banner_img_wrapper'>
        <Header/>
        <div className='universal_container'>
            <div className='banner_text'>
                <h1>Discover the best destinations in the world</h1>
                <h3>Stay In The Moment</h3>
            </div>
            <div className='banner_categories_wrapper'>
                <div className='category_1'>
                     <img src={plane}/>
                     <p>Flights</p>
                </div>
                <div className='category_1'>
                <i class="fa-solid fa-van-shuttle"></i>
                <p>Buses</p>
                </div>
                <div className='category_1 active_class'>
                     <img src={hotels}/>
                     <p>Hotels</p>
                </div>
                <div className='category_1'>
                     <img src={train}/>
                     <p>Trains</p>
                </div>
            </div>
        </div>
      </div>
      <ClientInformation/>
    </>
  )
}

export default Banner

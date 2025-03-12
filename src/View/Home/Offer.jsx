import React from 'react'
import img from '../../assets/Group 1171275543.png'
import path from '../../assets/Group 1171275544.png'
const Offer = () => {
  return (
    <div className='offer_wrapper' style={{
      position:"relative",
      overflow:'hidden',
      marginBottom:'80px'
    }}>
      <div className='universal_container offer_img_wrapper'>
        <img src={img}/>
        <button>Get it Now</button>
      </div>
      <img className='img_path' src={path}/>
    </div>
  )
}

export default Offer

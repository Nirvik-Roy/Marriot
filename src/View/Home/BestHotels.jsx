import React from 'react'
import Usa from '../../assets/image (18).png'
import Star from '../../assets/Star 1.png'
import dollar from '../../assets/dollar-symbol (1) 1.png'
import tokyo from '../../assets/image (19).png'
const BestHotels = () => {
  return (
    <>
      <div className='universal_container'>
      <div className='best_hotel_wrapper'>
      <h1 className='heading'>Best Hotel Deals</h1>
      <div className='hotels_categories_wrapper'>
        <div className='hotel_category_1 hotel_active'>All</div>
        <div className='hotel_category_1'>London</div>
        <div className='hotel_category_1'>Derby</div>
        <div className='hotel_category_1'>USA</div>
        <div className='hotel_category_1'>California</div>
        <div className='hotel_category_1'>Spain</div>
        <div className='hotel_category_1'>Tokyo</div>
      </div>

      <div className='home_hotels_divs'>
      {[1,2,3,4,5,6,].map((e,i)=>(
        <div className='hotel_div_1' key={i}>
            <div className='hotel_img_div'>
                <img src={Usa}/>
                <p>30% off</p>
                <div className='favorite_div'>
                <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className='hotel_details_wrapper'>
                <div className='details_left'>
                    <h5>Best in USA</h5>
                    <h6>Bk Kingdom, USA</h6>
                    <p style={{
                        color:' rgba(72, 71, 71, 1);'
                    }}>4.8 <img style={{
                        width: '10px',
                        height: '10px',
                        marginLeft:'5px'
                    }} src={Star}/></p>
                </div>
                <div className='details_right'>
                    <h6>From<img style={{
                        width: '15px',
                        height: '15px',
                        marginLeft:'5px'
                    }} src={dollar}/> 7,500/night</h6>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
      ))}
       
      </div>
      <div className='button_wrapper'>
      <button className='show_more_btn'>Show More</button>
      </div>

      </div>
      
      </div>
    </>
  )
}

export default BestHotels

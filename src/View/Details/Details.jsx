import React, { use } from 'react'
import './Details.css'
import ClientInformation from '../Home/ClientInformation'
import star from '../../assets/Group 1171275450.png'
import img from '../../assets/image (32).png'
import img1 from '../../assets/image (33).png'
import img2 from '../../assets/image (34).png'
import food from '../../assets/dinner (1) 1.png'
import location from '../../assets/dinner (1) 1 (1).png'
import user from '../../assets/Rectangle 7.png'
import dinner from '../../assets/Rectangle 7 (1).png'
import car from '../../assets/Rectangle 7 (2).png'
import bar from '../../assets/Rectangle 7 (3).png'
import hour from '../../assets/Rectangle 7 (4).png'
import smallcircle from '../../assets/Ellipse 28.png'
import dollar from '../../assets/dollar-symbol (1) 1.png'
import dollar2 from '../../assets/dollar-currency-symbol 10.png'
import maps from '../../assets/google-maps 1.png'
import HotelRooms from './HotelRooms'
const Details = () => {
  return (
    <>
     <div className="cart-header">
      </div>
      <ClientInformation /> 
      <div className='universal_container' style={{
        paddingBottom:'80px'
      }}>
      <div className='hotel_rating_div'>
        <h2>Hotel Jass</h2>
        <img src={star}/>
        </div>
        <div className='hotels_details_wrapper'>
       
      
            <div className='left_hotel_detalis_div'>
            <div className='grid_layout_div'>
            <div className='hotel_details_div1'>
                    <img src={img} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius:'10px'
                    }}/>
                </div>
                <div className='hotel_details_div2'>
                <img src={img1} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                         borderRadius:'10px'
                    }}/>
                </div>
                <div className='hotel_details_div3'>
                <img src={img2} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                         borderRadius:'10px'
                    }}/>
                </div>
            </div>
                <p>Experience the comfort of this property offering well appointed rooms, an incredible restaurants and swimming
                pool.</p>
                <div className='food_dinning_wrapper'>
                    <div className='food_div'>
                        <img src={food}/>
                        <h5>Food and Dinning</h5>
                    </div>
                    <div className='food_div'>
                        <img src={location}/>
                        <h5>Location & Surrounding </h5>
                    </div>
                </div>
                <h6 className='amenties_heading'>Amenities</h6>
                <div className='amenties_wrapper'>
                {[user,dinner,car,bar,hour,].map((e,i)=>(
                    <div className='amenties_div' key={i}>
                        <img src={e}/>
                        <h5>{i === 0 ? 'Adults Only' : i === 1 ? 'Restaurant' : i === 2 ? 'Parking Zone' : i===3 ? 'Bar' : i===4 ? '24-hours Room Service' :''}</h5>
                    </div>
                ))}
                   
                    <div className='amenties_amount'>+ 30 Amenties</div>
                </div>
            </div>
            <div className='right_hotel_details_div'>
                <h2>Budget Room</h2>
                <h3>Fits 2 Adults</h3>
                <h6><img src={smallcircle} style={{
                    marginRight:'5px'
                }}/>Book with <img src={dollar}/>0 payment</h6>
                <h6 style={{
                    marginBottom:"0px"
                }}><img src={smallcircle} style={{
                    marginRight:'5px'
                }}/>No meals included</h6>
                <h5 style={{
                    marginTop:'8px'
                }}>Free cancellation till 24 hours before checking</h5>
                <div className='d-flex justify-content-start align-items-center' style={{
                    columnGap:'5px',
                    marginTop:"10px"
                }}>
                <h4 className='per_night'><img src={dollar2}/>3,500/night 
          
          </h4>
                <span style={{
                    fontSize:'11px'
                }}>per night</span>
                </div>
                <h4 className='per_night_current'><img src={dollar2}/><span>1,990</span> + <img style={{
                    width:'15px'
                }} src={dollar}/>299 taxes and fees</h4>
               
                <div className='button_wrapper_book_now'>
                    <button>Book Now</button>
                </div>
                <div className='reviews_wrapper'>
                    <button>4.8</button>
                    <p>Excellent <span>(650 ratings)</span></p>
                    <h4 style={{
                        marginTop:'5px'
                    }}>All Reviews</h4>
                </div>

                <div className='reviews_wrapper mt-2'>
                    <img src={maps} style={{
                        width:'32px',
                        height:'32px    ',
                        marginTop:'5px'
                    }}/>
                    <div>
                    <p>Mainfun </p>
                    <p><span style={{
                        fontSize:'12px'
                    }}>10 mins walking distance from St. Joshep 
                    Street</span> </p>
                    
                    </div>
                
                 
                </div>
            </div>
        </div>
<div className='date_selection_wrapper'>
    <div className='change_Dates_wrapper'>
        <h2>Change dates & guests</h2>
        <h5>Check-in: 11 AM Check-out: 11 AM</h5>
    </div>
    <div className='date_select_tags_wrapper'>
        <select>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
        </select>

        <select>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
            <option value={'Sun, 11th Mar,25'}>Sun, 11th Mar,25</option>
        </select>
    </div>
    <div className='search_btn_wrapper'>
        <button>Update Search</button>
    </div>
</div>
        <HotelRooms/>
      </div>
    </>
  )
}

export default Details

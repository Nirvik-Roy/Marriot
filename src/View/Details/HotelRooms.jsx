import React from 'react'
import hotel from '../../assets/image (35).png'
import home from '../../assets/house 1.png'
import user from '../../assets/house 1 (1).png'
import sleep from '../../assets/house 1 (2).png'
import city from '../../assets/house 1 (3).png'
import smallcircle from '../../assets/Ellipse 31.png'
import bluecircle from '../../assets/Ellipse 28 (1).png'
const HotelRooms = () => {
  return (
    <>
      <div className='hotel_room_card_wrapper'>
        <button className='top-recommend-btn'>Recommended</button>
        <div className='left_hotel_room_div'>
            <div className='hotel_img_div'>
                <img src={hotel}/>
            </div>
            <h2>Deluxe Twin Room</h2>
            <div className='facilites_wrapper'>
                <div className='facility_1'>
                   <img src={home}/>
                   <p>301 sq.ft (28 sq.mt)</p>
                </div>
                <div className='facility_1'>
                   <img src={sleep}/>
                   <p>Twin bed</p>
                </div>
                <div className='facility_1'>
                   <img src={user}/>
                   <p>Maximum 4 people</p>
                </div>
                <div className='facility_1'>
                   <img src={city}/>
                   <p>City View</p>
                </div>
            </div>

            <div className='room_details_wrapper'>
                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>Air Conditioning</p>
                </div>
                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>In room dinning</p>
                </div>
                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>Wi-Fi</p>
                </div>

                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>Iron Board</p>
                </div>
                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>House Keeping</p>
                </div>
                <div className='room_details_1'>
                    <img src={smallcircle}/>
                    <p>Room Service</p>
                </div>
            </div>
        </div>
        <div className='right_hotel_room_div'>
         {[1,2].map((e,i)=>(
            <div className='right_hotel_1' style={ i ==0 ? {borderBottom:'1px solid rgba(0, 0, 0, 1)'} : {}}>
                <button className='recommend_btn'>Recommended</button>
                <div className='d-flex hotel-details-wrapper0'>
                <div className='right_hotel_details'>
                    <h6>Room with free cancellation | Breakfast only</h6>
                    <div className='bullet_point'>
                         <img src={bluecircle}/>
                         <p>Book with $ 0 payment</p>
                    </div>

                    <div className='bullet_point'>
                         <img src={bluecircle}/>
                         <p>Breakfast Included</p>
                    </div>

                    <div className='bullet_point'>
                         <img src={bluecircle}/>
                         <p>20% off on Food & Beverages</p>
                    </div>
                    <p style={{
                        fontSize:'12px',
                        color:'rgb(37, 28, 207)',
                        marginTop:"8px",
                        fontWeight:"600"
                    }}>Free cancellation till 24 hours before check-in</p>
                </div>
                <div className='right_hotel_details656'>
                  <div className='d-flex justify-content-start align-items-center' style={{
                    columnGap:"10px"
                  }}>
                    <p >$ 3500/night</p>
                    <span>per night</span>
                    
                  </div>
                  <h5>$1,990 </h5>
                  <h6>+$299 taxes and fees</h6>
                  <button>Select Room</button>
                  <h4>Exclusive Offers to HSBC Bank</h4>
                </div>
                </div>
               
            </div>
         ))}   
           
        </div>

      </div>
    </>
  )
}

export default HotelRooms

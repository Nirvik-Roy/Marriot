import React from 'react'
import room from '../../assets/image (25).png'
import Star from '../../assets/Star 1.png'
import dollar from '../../assets/dollar-symbol (1) 1.png'
const GuestsLove = () => {
  return (
    <>
      <div className='universal_container' style={{
        paddingBottom:'80px'
      }}>
        <div className='guests_heading_Wrapper'>
            <h1 className='heading text-center'> Home Guests Love</h1>
            <button>See more</button>


        </div>

         <div className='home_hotels_divs' style={{
            marginTop:"50px"
         }}>
              {[1,2,3,].map((e,i)=>(
                <div className='hotel_div_1' key={i}>
                    <div className='hotel_img_div'>
                        <img src={room}/>
                    </div>
                    <div className='hotel_details_wrapper'>
                        <div className='details_left'>
                            <h5>Double Room</h5>
                            <h6>Bk Kingdom, Uk</h6>
                            <p style={{
                                color:' rgba(72, 71, 71, 1);'
                            }}>4.8 <img style={{
                                width: '10px',
                                height: '10px',
                                marginLeft:'5px'
                            }} src={Star}/></p>
                        </div>
                        <div className='details_right'>
                            <h6><img style={{
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
      </div>
    </>
  )
}

export default GuestsLove

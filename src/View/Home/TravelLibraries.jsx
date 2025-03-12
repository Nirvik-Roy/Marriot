import React from 'react'
import img from '../../assets/image (26).png'
import img2 from '../../assets/image (27).png'
import img3 from '../../assets/image (28).png'
import img4 from '../../assets/image (29).png'
const TravelLibraries = () => {
  return (
    <>
      <div className='universal_container' style={{
        paddingBottom:'80px'
      }}> 
        <h1 className='heading text-center'>Latest Travel Libraries</h1>
        <div className='travel_libraries_wrapper'>
            <div className='travel_div1 travel_div'>
                <img src={img}/>
                <h1>Madrid the most visited city in 
                Spain</h1>
            </div>

            <div className='travel_div1 travel_div2'>
                <img src={img2}/>
                <h1>Most visited place in USA</h1>
            </div>

            <div className='travel_div1 travel_div3'>
                <img src={img3}/>
                <h1>Senso-ji temple,tokyo</h1>
            </div>

            <div className='travel_div1 travel_div4'>
                <img src={img4}/>
                <h1>World’s most beautiful bridges ,San Francisco for 
                Golden Bridge </h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default TravelLibraries

import React from 'react'
import location from '../../assets/placeholder 1.png'
import calender from '../../assets/placeholder 1 (1).png'
import arrowdown from '../../assets/right-arrow 1.png'
import people from '../../assets/placeholder 1 (2).png'
const ClientInformation = () => {
  return (
    <>
      <div className='universal_container'>
        <div className='information_div'>
            <div className='information_div_1'>
                <p>Where are you going?</p>
                <div className='destination_wrapper'>
                    <img className='information_img' src={location}/>
                    <h5>Destination</h5>
                </div>
            </div>
            <div className='information_div_1'>
                <p>Check In</p>
                <div className='destination_wrapper'>
                    <img className='information_img' src={calender}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>8 Mar 25 <img style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>
            </div> 
            <div className='information_div_1'>
            <p>Check Out</p>
                <div className='destination_wrapper'>
                    <img className='information_img' src={calender}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>8 Mar 25 <img style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>
            </div>
            <div className='information_div_1'>
            <p>Guests?</p>
                <div className='destination_wrapper'>
                    <img className='information_img' src={people}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>1 room, 2 adults <img style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>
            </div>
            <div className='information_div_2'>
                <button>Search</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ClientInformation

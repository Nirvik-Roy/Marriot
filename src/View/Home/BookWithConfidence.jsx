import React from 'react'
import calendar from '../../assets/booking 1.png'
import customercare from '../../assets/booking 1 (1).png'
import hand from '../../assets/booking 1 (2).png'
import path from '../../assets/Group 1171275545.png'
const BookWithConfidence = () => {
  return (
    <>
      <div className='bookwithconfidence_wrapper' style={{
        position:'relative',
        overflow:'hidden'
      }}>
        <h1 className='heading text-center'>Book With Confidence</h1>
        <div className='universal_container book_wrapper'>
            <div className='book_div1'>
                <img src={calendar}/>
                <h2>Flexible Booking</h2>
                <p>Choose how you want to book your trip<br/>
                Book online anytime </p>
            </div>
            <div className='book_div1'>
                <img src={customercare}/>
                <h2>Expert Advise</h2>
                <p>Our consultant can book everything of trip<br/>
                Book online anytime  </p>
            </div>
            <div className='book_div1'>
                <img src={hand}/>
                <h2>Member Savings</h2>
                <p>Become a member to unlocking all offers<br/>
                Book online anytime  </p>
            </div>
          
        </div>
        <img className='right_path' src={path}/>
      </div>
    </>
  )
}

export default BookWithConfidence

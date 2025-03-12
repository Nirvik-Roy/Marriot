import React from 'react'

const Confirmation = () => {
  return (
    <div>
      <div className="universal_container">
      <div className="confirmation-container">
      <p className='con-marriot'>Marriot</p>
      <p className='con-collection'>Collections</p>


      <div className="confirmation-message">
      <h2>Booking Confirmed Successfully!</h2>
        <p>
          Thank you for choosing Marriot. Your reservation is confirmed. If
          there is anything you need before your arrival, please dont hesitate
          to reach us out. Thank you.
        </p>
      </div>
      <div className="payment-summary">
        <h3>$ 4,177</h3>
        <p>Payment Successful</p>
      </div>
      <div className="payment-details">
        <h3>Payment Details</h3>
        <p>
          Date: <span>10th March, 2025</span>
        </p>
        <p>
        Reference No: <span>R457906470</span>
        </p>
        <p>
          Amount: <span>$ 4,177</span>
        </p>
        <p>
          Payment Method: <span>Credit Card</span>
        </p>
        <p>
          Payment Status: <span>Successful</span>
        </p>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button className="back-button">Go back to home</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Confirmation

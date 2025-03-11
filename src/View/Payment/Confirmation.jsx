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
          <strong>Date:</strong> 10th March, 2025
        </p>
        <p>
          <strong>Reference No:</strong> R457906470
        </p>
        <p>
          <strong>Amount:</strong> $ 4,177
        </p>
        <p>
          <strong>Payment Method:</strong> Credit Card
        </p>
        <p>
          <strong>Payment Status:</strong> Successful
        </p>
      </div>
      <button className="back-button">Go back to home</button>
      </div>
      </div>
    </div>
  )
}

export default Confirmation

import React, { useEffect, useState } from 'react'
import './Payment.css'
import hotelImg from '../../assets/Group 1171275323.png';
import checkImg from '../../assets/check-button 1.png'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  useEffect(()=>{
      window.scrollTo({top:0,behavior:'instant'})
    },[])

  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const offers = [
    { id: 1, title: "Marriot Deals", subtext: "Get exclusive offers", price: -678 },
    { id: 2, title: "Marriot Deals", subtext: "Get exclusive offers", price: -278 },
    { id: 3, title: "Marriot Deals", subtext: "Get exclusive offers", price: -178 },
    { id: 4, title: "Marriot Deals", subtext: "Get exclusive offers", price: -178 },
    { id: 5, title: "Marriot Deals", subtext: "", price: -78 },
  ];
  return (
    <div style={{marginBottom:'100px'}}>
      <div className="universal_container">
        <div className="payment-page-wrapper">
          <div className="payment-big-div1">
            <div className="price-summary-taxes-wrapper">


              <div className="price-summary-div">
                <p className='price-summary-heading'>Price Summary</p>
                <div className="price-summary-content">
                <div className='price-summary1'>
                <div style={{display:'flex', justifyContent:'space-between', padding:'5px 0px'}}><p>Best Price</p><p>$14,769</p></div>
                <div style={{display:'flex', justifyContent:'space-between', padding:'5px 0px'}}><p>Total Discount</p><p>- $11,593</p></div>
                </div>
                <div className='price-summary2' >
                  <div style={{display:'flex', justifyContent:'space-between', padding:'5px 0px'}}><p>Price after discount</p><p>$3,203</p></div>
                  <div style={{display:'flex', justifyContent:'space-between', padding:'5px 0px'}}><p>Taxes & Service Fees</p><p>$974</p></div>
                </div>
                <div className='price-summary3'>
                <p>Total amount to be paid</p>
                <p>$4,177</p>
                </div>
                </div>
              </div>


              <div className="taxes-div">
                <p className='tax-heading'>Price inclusive of taxes and all guest</p>
                <div className="add-breakfast">
                  <div>
                  <p className='add-breakfast-txt'>Add breakfast of taxes and all guests</p>
                  <p className='tax-and-fees'>includes taxes and fees.</p>
                  </div>
                  <button className='apply-btn0'>Apply</button>

                </div>
              </div>
            </div>

            <div className="property-info">
              <div className="head33">
                <p>Property Info</p>
              </div>
              <div className="hotel-name-img">
                <div className="hotel-img333">
                  <img src={hotelImg} alt="" />
                </div>
                <div className="hotel-name333">
                  <p className='hotel-name'>Luxury Resort</p>
                  <p className='hotel-add'><i class="fa-solid fa-location-dot" style={{color:'#b01b11',marginRight:'5px'}}></i>196 Sctt Rode, Thailand 81180</p>
                  <p className='hotel-rating33'><i class="fa-solid fa-star" style={{color:"#F7EB3D",marginRight:'5px'}}></i>4.5 (199 ratings)</p>
                </div>
                
              </div>
              <div className="check-in-div">
                  <div className="check-in">
                    <p className='txt22'>Check-in</p>
                    <p style={{fontSize:'12px'}}>10th March, 12.00pm</p>
                  </div>
                  <div className="check-out">
                    <p className='txt22'>Check-out</p>
                    <p style={{fontSize:'12px'}}>12th March,11.00am</p>
                  </div>
                  <div className="guest">
                    <p className='txt22'>Guests</p>
                    <p style={{fontSize:'12px'}}>2</p>
                  </div>
                </div>
                <div className="one-room">
                  <div style={{borderBottom:'1px solid #ccc', padding:'10px 15px'}}>
                    <p style={{fontSize:'12px', fontWeight:'500'}}>1 room for 2 adults</p>
                    <p style={{color:'#585454', fontSize:'12px'}}>You have $11,593 with your booking</p>
                  </div>
                  <div style={{padding:'10px 15px'}}>
                    <p style={{fontSize:'12px', fontWeight:'500'}}>1 Standard king size room</p>
                    <p style={{color:'#251BD2', fontSize:'12px', fontWeight:'500'}}>Free cancellation before 2nd of March</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="payment-big-div2">

            <div className="marriot-select-payment-wrapper">

              <div className="marriot-offers-div">
                <div className="marriot-header">
                  <p>Marriot Offers</p>
                </div>

                <div className="marriot-list">
        {offers.map((offer) => (
          <label
            key={offer.id}
            className={`marriot-item ${selectedOffer === offer.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="offer"
              value={offer.id}
              checked={selectedOffer === offer.id}
              onChange={() => setSelectedOffer(offer.id)}
            />
            <div className="offer-details">
              <p className="offer-title">{offer.title}</p>
              {offer.subtext && <p className="offer-subtext">{offer.subtext}</p>}
            </div>
            <span className="offer-price">{offer.price}</span>
          </label>
        ))}
      </div>

              </div>



              <div className="payment-container11">
      <h3 className="payment-title11">Select Payment Option</h3>
      <div className="payment-option11">
        <span className="checkmark">✔</span>
        <span className="payment-text11">Pay entire amount $4,177 now</span>
      </div>
    </div>
            </div>

            <div className="guest-div">
            <h2 className="guest-title">Guest Details</h2>

<div className="input-group">
  <div>
    <label>First Name</label>
    <input type="text" placeholder="First Name" defaultValue="lorem" />
  </div>
  <div>
    <label>Last Name</label>
    <input type="text" placeholder="Last Name" defaultValue="lorem" />
  </div>
</div>

<div className="single-input">
  <label>Email Id</label>
  <input type="email" defaultValue="lorem49@gmail.com" />
  <p className="info-text">
    Your booking voucher will be sent to this email address
  </p>
</div>

<div className="single-input">
  <label>Phone Number</label>
  <input type="tel" defaultValue="+1 6780097899" />
</div>

<div className="single-input">
  <label>Pan Details</label>
  <input type="text" placeholder="Enter PAN number" />
  <p className="info-text warning">
    As per RBI, PAN details are mandatory for all international bookings
  </p>
</div>

<div className="single-input">
  <label>Enter Billing Address</label>
  <input type="text" placeholder="Enter billing address" />
</div>

<div className="single-input">
  <label>Enter Pin-code</label>
  <input type="text" placeholder="Enter pincode" />
</div>

<div className="single-input">
  <label>State</label>
  <input type="text" defaultValue="West Bengal" readOnly />
</div>

<div className="checkbox-container">
  <input type="checkbox" id="confirm" defaultChecked />
  <label htmlFor="confirm">
    Confirm and save billing details to your profile.
  </label>
</div>
            </div>
          </div>

          <button className='proceed-to-payment-btn' style={{marginTop:'20px'}} onClick={()=>setIsPopupOpen(true)}>Proceed to Payment</button>
          <button className='proceed-to-payment-btn'>Cancel Booking</button>
        </div>
      </div>


      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <div className="checkmark-icon122">
                <img src={checkImg} alt="" />
              </div>
              <h2>Your payment is successfully done</h2>
              <p>Now you can enjoy your trip with your mates</p>
              <button className="done-btn" onClick={() => {setIsPopupOpen(false); navigate("/confirmation");}}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment

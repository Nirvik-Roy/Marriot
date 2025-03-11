import React from 'react'
import './Cart.css'
import cartImg from '../../assets/image (6).png'

const Cart = () => {
  return (
    <div style={{marginBottom:"100px"}}>
      <div className="cart-header">
      </div>
      <div className="universal_container">
        <h2 className='my-cart-txt'>My Cart</h2>
        <div className="cart-item-wrapper">
        <div className="cart-item-div">
          <div className="cart-image">
            <img src={cartImg} alt="" />
          </div>
          <div className="cart-content">
            <div className="cart-content-header">
              <p>Dulex Twin Room</p>
              <div className="item-btns">
                <button><i class="fa-solid fa-plus"></i></button>
                <span>1</span>
                <button><i class="fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div className="cart-details-wrapper">
              <div className="cart-detail1">
                <p><i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>301 sq.ft (28 sq.mt)</p>
                <p><i class="fa-solid fa-user" style={{marginRight:"10px"}}></i> Maximum 4 people</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Air Conditioning</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Wi-Fi</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>HOuse Keeping</p>
              </div>
              <div className="cart-detail2">
                <p><i class="fa-solid fa-bed" style={{marginRight:"10px"}}></i>Twin Bed</p>
                <p><i class="fa-solid fa-city" style={{marginRight:"10px"}}></i>City View</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In room dinnig</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In Board</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item-div">
          <div className="cart-image">
            <img src={cartImg} alt="" />
          </div>
          <div className="cart-content">
            <div className="cart-content-header">
              <p>Dulex Twin Room</p>
              <div className="item-btns">
                <button><i class="fa-solid fa-plus"></i></button>
                <span>1</span>
                <button><i class="fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div className="cart-details-wrapper">
              <div className="cart-detail1">
                <p><i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>301 sq.ft (28 sq.mt)</p>
                <p><i class="fa-solid fa-user" style={{marginRight:"10px"}}></i> Maximum 4 people</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Air Conditioning</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Wi-Fi</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>HOuse Keeping</p>
              </div>
              <div className="cart-detail2">
                <p><i class="fa-solid fa-bed" style={{marginRight:"10px"}}></i>Twin Bed</p>
                <p><i class="fa-solid fa-city" style={{marginRight:"10px"}}></i>City View</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In room dinnig</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In Board</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item-div">
          <div className="cart-image">
            <img src={cartImg} alt="" />
          </div>
          <div className="cart-content">
            <div className="cart-content-header">
              <p>Dulex Twin Room</p>
              <div className="item-btns">
                <button><i class="fa-solid fa-plus"></i></button>
                <span>1</span>
                <button><i class="fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div className="cart-details-wrapper">
              <div className="cart-detail1">
                <p><i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>301 sq.ft (28 sq.mt)</p>
                <p><i class="fa-solid fa-user" style={{marginRight:"10px"}}></i> Maximum 4 people</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Air Conditioning</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Wi-Fi</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>HOuse Keeping</p>
              </div>
              <div className="cart-detail2">
                <p><i class="fa-solid fa-bed" style={{marginRight:"10px"}}></i>Twin Bed</p>
                <p><i class="fa-solid fa-city" style={{marginRight:"10px"}}></i>City View</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In room dinnig</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In Board</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item-div">
          <div className="cart-image">
            <img src={cartImg} alt="" />
          </div>
          <div className="cart-content">
            <div className="cart-content-header">
              <p>Dulex Twin Room</p>
              <div className="item-btns">
                <button><i class="fa-solid fa-plus"></i></button>
                <span>1</span>
                <button><i class="fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div className="cart-details-wrapper">
              <div className="cart-detail1">
                <p><i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>301 sq.ft (28 sq.mt)</p>
                <p><i class="fa-solid fa-user" style={{marginRight:"10px"}}></i> Maximum 4 people</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Air Conditioning</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i> Wi-Fi</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>HOuse Keeping</p>
              </div>
              <div className="cart-detail2">
                <p><i class="fa-solid fa-bed" style={{marginRight:"10px"}}></i>Twin Bed</p>
                <p><i class="fa-solid fa-city" style={{marginRight:"10px"}}></i>City View</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In room dinnig</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>In Board</p>
                <p><i class="fa-solid fa-circle" style={{marginRight:"10px", fontSize:"10px"}}></i>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <button className='cart-check-out-btn'>Check-out</button>
      </div>
    </div>
  )
}

export default Cart

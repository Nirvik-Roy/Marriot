import React from 'react'

const HotelLocation = () => {
  return (
    <div className='hotel-location-container'>
      <h5>Location</h5>
      <p className='location-rated'><i class="fa-solid fa-location-dot" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i><span>Location rated 4.3 by customers</span></p>
      <div className="location-left-right-div">
      <div className="location-left-div">
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505538308!2d-74.30916052034208!3d40.69719335939358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1742185796424!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "5px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          ></iframe>
      </div>
      <div className="location-right-div">
      <div className="landmark-section">
            <h6>
            <i class="fa-solid fa-location-dot" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i>
              Key landmarks
            </h6>
            <ul>
              <li>
                <input type="checkbox" id="landmark1" />
                <label htmlFor="landmark1"> St. Joshep Street Road</label>
                <span className="distance">0.7km</span>
              </li>
              <li>
                <input type="checkbox" id="landmark2" />
                <label htmlFor="landmark2"> St. Joshep Street Road</label>
                <span className="distance">0.7km</span>
              </li>
            </ul>
          </div>


          <div className="category">
            <h6>
            <i class="fa-solid fa-utensils" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i> Restaurant
            </h6>
          </div>
          <div className="category">
            <h6>
            <i class="fa-solid fa-camera" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i> Attractions
            </h6>
          </div>
          <div className="category">
            <h6>
            <i class="fa-solid fa-truck-plane" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i> Transport
            </h6>
          </div>
          <div className="category">
            <h6>
            <i class="fa-solid fa-ellipsis" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i> Other Landmarks
            </h6>
          </div>
      </div>
      </div>
    </div>
  )
}

export default HotelLocation

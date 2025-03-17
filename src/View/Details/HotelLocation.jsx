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
            height="100%"
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
            <div>

            <i class="fa-solid fa-location-dot" style={{color:'red', marginRight:'5px',fontSize:'14px'}}></i>Key landmarks 
            </div>
              <i class="fa-solid fa-angle-down"></i>
            </h6>
            <ul>
              <li>
              <div>

                <input type="checkbox" id="landmark1" style={{marginRight:'5px'}}/>
                <label htmlFor="landmark1"> St. Joshep Street Road</label>
              </div>
                <span className="distance">0.7km</span>
              </li>
              <li>
              <div style={{display:'flex',alignItems:'center'}}>

                <input type="checkbox" id="landmark2" style={{marginRight:'5px'}}/>
                <label htmlFor="landmark2"> St. Joshep Street Road</label>
              </div>
                <span className="distance">0.7km</span>
              </li>
            </ul>
          </div>


          <div className="category">
            <h6>
            <div>
              
            <i class="fa-solid fa-utensils" style={{ marginRight:'5px',fontSize:'14px'}}></i> Restaurant 
            </div>
            <i class="fa-solid fa-angle-down"></i>
            </h6>
          </div>
          <div className="category">
            <h6>
            <div>

            <i class="fa-solid fa-camera" style={{ marginRight:'5px',fontSize:'14px'}}></i> Attractions 
            </div>
            <i class="fa-solid fa-angle-down"></i>
            </h6>
          </div>
          <div className="category">
            <h6>
            <div>

            <i class="fa-solid fa-truck-plane" style={{ marginRight:'5px',fontSize:'14px'}}></i> Transport 
            </div>
            <i class="fa-solid fa-angle-down"></i>
            </h6>
          </div>
          <div className="category">
            <h6>
            <div>

            <i class="fa-solid fa-ellipsis" style={{marginRight:'5px',fontSize:'14px'}}></i> Other Landmarks 
            </div>
            <i class="fa-solid fa-angle-down"></i>
            </h6>
          </div>
      </div>
      </div>
    </div>
  )
}

export default HotelLocation

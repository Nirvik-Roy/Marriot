import React from 'react'

const PropertyType = () => {
  return (
    <div className='prototype-container'>
      <p className='property-name'>Property Type</p>
      <div className="properties-wrapper">
        <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Hotels</span></div><span >1260</span></div>
        <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Villas</span></div><span >789</span></div>
        <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Resorts</span></div><span >699</span></div>
        <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Homestay</span></div><span >1260</span></div>
        <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Apartments</span></div><span >1100</span></div>
      </div>
      <p className='property-name' style={{marginTop:'15px'}}>Star Ratings <i class="fa-solid fa-star" style={{color:'#F7EB3D', fontSize:'12px'}}></i></p>
      <div className="properties-wrapper">
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Hotels</span></div><span >1260</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Hotels</span></div><span >1260</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Hotels</span></div><span >1260</span></div>
      </div>
      <p className='property-name' style={{marginTop:'15px'}}>Room Facilities</p>
      <div className="properties-wrapper">
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Balcony</span></div><span >900</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Air Conditioning</span></div><span >789</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Private Pool</span></div><span >134</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Private Bathroom</span></div><span >678</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Kitchen</span></div><span >549</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Children Play Area</span></div><span >190</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Flat Screen TV</span></div><span >899</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>View</span></div><span >699</span></div>
      </div>
      <p className='property-name' style={{marginTop:'15px'}}>Amenities</p>
      <div className="properties-wrapper">
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Wi-fi</span></div><span >1260</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Spa</span></div><span >789</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Swimming Pool</span></div><span >699</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Garden</span></div><span >1498</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Indoor Games</span></div><span >1100</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Parking</span></div><span >1498</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Bar</span></div><span >1498</span></div>
      </div>
      <p className='property-name' style={{marginTop:'15px'}}>Cities</p>
      <div className="properties-wrapper">
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>USA</span></div><span >49</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Spain</span></div><span >67</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>California</span></div><span >54</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Tokyo</span></div><span >34</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>London</span></div><span >60</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>Derby</span></div><span >39</span></div>
      </div>
    </div>
  )
}

export default PropertyType

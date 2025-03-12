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
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      <div><div><input type="checkbox" style={{marginRight:'10px'}}/> <span>5 Star</span></div><span >80</span></div>
      </div>
    </div>
  )
}

export default PropertyType

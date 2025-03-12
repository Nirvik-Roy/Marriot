import React from 'react'
import filterCardImg1 from '../../assets/Group 1171275323.png'
import filterCardImg2 from '../../assets/image (8).png'
import filterCardImg3 from '../../assets/image (9).png'
import filterCardImg4 from '../../assets/image (11).png'

const FilterCards = () => {
  return (
    <div className='filter-cards-container'>
      <div className="filter-card">
        <div className="filter-img">
          <img src={filterCardImg1} alt="" />
        </div>
        <div className="filter-card-content">
          <p className='card-hotel-name'>Hotel Mile(Spain)</p>
          <div className='rating-div'><span>4.8</span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(12k reviews)</span></div>
          <p className='stay-pricing'>$ 5,500/night </p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>1 bed, 2 person, 1 child</p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>Free Cancellation, No Extra Payment</p>
          <button className='filter-card-book-now-btn'>Book Now</button>
        </div>
      </div>
      <div className="filter-card">
      <div className="filter-img">
          <img src={filterCardImg2} alt="" />
        </div>
        <div className="filter-card-content">
          <p className='card-hotel-name'>Hotel Mile(Spain)</p>
          <div className='rating-div'><span>4.8</span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(12k reviews)</span></div>
          <p className='stay-pricing'>$ 5,500/night </p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>1 bed, 2 person, 1 child</p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>Free Cancellation, No Extra Payment</p>
          <button className='filter-card-book-now-btn'>Book Now</button>
        </div>
      </div>
      <div className="filter-card">
      <div className="filter-img">
          <img src={filterCardImg3} alt="" />
        </div>
        <div className="filter-card-content">
          <p className='card-hotel-name'>Hotel Mile(Spain)</p>
          <div className='rating-div'><span>4.8</span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(12k reviews)</span></div>
          <p className='stay-pricing'>$ 5,500/night </p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>1 bed, 2 person, 1 child</p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>Free Cancellation, No Extra Payment</p>
          <button className='filter-card-book-now-btn'>Book Now</button>
        </div>
      </div>
      <div className="filter-card">
      <div className="filter-img">
          <img src={filterCardImg4} alt="" />
        </div>
        <div className="filter-card-content">
          <p className='card-hotel-name'>Hotel Mile(Spain)</p>
          <div className='rating-div'><span>4.8</span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>(12k reviews)</span></div>
          <p className='stay-pricing'>$ 5,500/night </p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>1 bed, 2 person, 1 child</p>
          <p style={{fontSize:'12px',marginTop:'5px', color:'#585454'}}>Free Cancellation, No Extra Payment</p>
          <button className='filter-card-book-now-btn'>Book Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default FilterCards

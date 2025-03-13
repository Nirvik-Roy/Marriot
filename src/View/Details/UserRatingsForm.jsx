import React from 'react'


const RatingBar = ({ label, percentage }) => {
  return (
    <div className='rating-bar'>
      <span className='rating-label'>{label}</span>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${percentage}%` }}></div>
      </div>
      <span className='rating-percentage'>{percentage}%</span>
    </div>
  );
};


const CategoryRating = ({ label, rating }) => {
  return (
    <div className='category-rating'>
      <span className='category-label'>{label}</span>
      <span className='category-score'>{rating}</span>
    </div>
  );
};

const UserRatingsForm = () => {
  return (
    <div className='user-rating-form'>
      <h3 className='user-rating-heading'>User Rating & Reviews</h3>
      <div className="form-buttons">
        <p>Everyone</p>
        <p>Couple</p>
        <p>Solo</p>
        <p>Family</p>
        <p>Group</p>
        <p>Business</p>
      </div>
      <div className="rating-container">
        <div className="rating-left-div">
          <div className="rating-div">
            <div className="good-txt-div">
              <div className='rating'>4.1</div>
              <div className="good-txt-content">
                <p className='very-good-txt'>Very Good</p>
                <p className='rating-number'>700 Ratings, 230 Reviews</p>
              </div>
            </div>
            <div className='rating-bars'>
        <RatingBar label='Excellent' percentage={32} />
        <RatingBar label='Very Good' percentage={36} />
        <RatingBar label='Average' percentage={19} />
        <RatingBar label='Poor' percentage={7} />
        <RatingBar label='Bad' percentage={6} />
      </div>

      <div className="ratings-category-div">
        <h3 className='rating-category-heading'>Ratings Categories</h3>
        <div className='rating-categories'>
        <CategoryRating label='Location' rating={4.3} />
        <CategoryRating label='Cleanliness' rating={4.1} />
        <CategoryRating label='Room' rating={4.5} />
        <CategoryRating label='Food' rating={3.9} />
        <CategoryRating label='Hospitality' rating={3.8} />
        <CategoryRating label='Value For Money' rating={3.9} />
      </div>
      </div>
          </div>
        </div>
        <div className="rating-right-div">
          <div className="rating-filter-sort-div">
            <div className="filter1-div">
              <p style={{fontWeight:'500',marginBottom:'8px'}}>Filter By: </p>
              <div className="filterd-btns">
                <button>All Reviews</button>
                <button>Good Food</button>
                <button>Good Service</button>
                <button>Clean Room</button>
                <button>Value for MOney</button>
                <button>Near Bus Stand</button>
                <button>Good Amenities</button>
                <button>Good Food</button>
              </div>
            </div>
            <div className="sort1-div">
              <p style={{fontWeight:'500',marginBottom:'8px'}}>Sort By:</p>
              <button className='latest-btn'>Latest First <i class="fa-solid fa-angle-down"></i></button>
            </div>
          </div>
          <div className="review-cards-wrapper">
            <div className="review-card">
            <div className="review-header">
        <h2 className="review-title">Excellent Service</h2>
        <span className="review-rating">4.9</span>
      </div>
      <div className="review-info">
        <span className="review-author">Amol Winget</span>
        <span className="dot">•</span>
        <span className="review-category">Family</span>
        <span className="dot">•</span>
        <span className="review-date">Feb 23rd, 2025</span>
      </div>
      <h3 className="room-type">Deluxe Twin Room</h3>
      <p className="review-text">
        Excellent! The room’s were very clean. Their service is so perfect. Very
        good hotel for staying with family members. I recommended this hotel to
        everyone.
      </p>
      <div className="review-footer">
        <a href="#" className="helpful-link">Helpful?</a>
        <span className="thumbs-up"><i class="fa-solid fa-thumbs-up"></i></span>
      </div>
            </div>

            <div className="review-card">
            <div className="review-header">
        <h2 className="review-title">Excellent Service</h2>
        <span className="review-rating">4.9</span>
      </div>
      <div className="review-info">
        <span className="review-author">Amol Winget</span>
        <span className="dot">•</span>
        <span className="review-category">Family</span>
        <span className="dot">•</span>
        <span className="review-date">Feb 23rd, 2025</span>
      </div>
      <h3 className="room-type">Deluxe Twin Room</h3>
      <p className="review-text">
        Excellent! The room’s were very clean. Their service is so perfect. Very
        good hotel for staying with family members. I recommended this hotel to
        everyone.
      </p>
      <div className="review-footer">
        <a href="#" className="helpful-link">Helpful?</a>
        <span className="thumbs-up"><i class="fa-solid fa-thumbs-up"></i></span>
      </div>
            </div>

            <div className="review-card">
            <div className="review-header">
        <h2 className="review-title">Excellent Service</h2>
        <span className="review-rating">4.9</span>
      </div>
      <div className="review-info">
        <span className="review-author">Amol Winget</span>
        <span className="dot">•</span>
        <span className="review-category">Family</span>
        <span className="dot">•</span>
        <span className="review-date">Feb 23rd, 2025</span>
      </div>
      <h3 className="room-type">Deluxe Twin Room</h3>
      <p className="review-text">
        Excellent! The room’s were very clean. Their service is so perfect. Very
        good hotel for staying with family members. I recommended this hotel to
        everyone.
      </p>
      <div className="review-footer">
        <a href="#" className="helpful-link">Helpful?</a>
        <span className="thumbs-up"><i class="fa-solid fa-thumbs-up"></i></span>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRatingsForm

import React, { useEffect, useState } from 'react'
import './Filter.css'
import Banner from '../Home/Banner'
import PropertyType from './PropertyType';
import FilterCards from './FilterCards';

const Filter = () => {
  useEffect(()=>{
      window.scrollTo({top:0,behavior:'instant'})
    },[])
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'lowToHigh' ? 'highToLow' : 'lowToHigh'))
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev); // Open/Close dropdown
  };
  return (
    <div style={{marginBottom:'100px'}}>
      <Banner />
      <div className="universal_container">
      <div className="sort-container">
      <div className="sort-div" onClick={toggleSortOrder}>
        <i class="fa-solid fa-arrow-up-short-wide"></i> 
        <span>Sort by: {sortOrder === 'lowToHigh' ? 'Low to High' : 'High to Low'}</span>
        <i className={`fa-solid ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
        {/* Dropdown Menu */}
      {/* {isDropdownOpen && (
          <div className="dropdown-menu">
            <p onClick={toggleSortOrder}>Sort by: {sortOrder === 'lowToHigh' ? 'High to low' : 'Low to high'}</p>
          </div>
        )} */}
      </div>

      <div className="prototype-hotels-wrapper">
        <PropertyType />
        <FilterCards />
      </div>
      <button className='filter-submit-btn'>Submit</button>
      </div>
    </div>
  )
}

export default Filter

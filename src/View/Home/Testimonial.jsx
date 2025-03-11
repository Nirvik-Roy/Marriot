import React from 'react'
import img from '../../assets/image (30).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {

  const PrevArrow = ({onClick}) =>(
    <div className='arrow_div1' onClick={onClick}>
    <i class="fa-solid fa-arrow-left"></i>
    </div>
  )
  const NextArrow = ({onClick}) =>(
    <div className='arrow_div2' onClick={onClick}>
    <i class="fa-solid fa-arrow-right"></i>
    </div>
  )
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:false,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  
  };
  return (
    <>
      <div className='slider_wrapper'>
        <div className='universal_container'>
            <div className='slider_head'>
                <h4>What People Are Saying</h4>
                <div className='arrow_wrapper'>
               
                  
                </div>
            </div>
            <Slider {...settings}>
          
            {[1,2,3,4,5,6].map((e,i)=>{
              return(
                <>
                <div className='slider_div' >
                <div className='left_slide_content'>
                    <p>“Waystay transformed our property's value from $8 million to a 
record-breaking $12 million in under three weeks. They identified
 key areas for improvement and made cost-effective changes 
that maximized the home's market value. Their expertise and 
efficiency delivered truly exceptional results.</p>
                    <h3>Gregg Bergstrom</h3>
                    <h5>Marketing Execute</h5>
                </div>
                <div className='right_slide_img' style={{
                    height:'220px'
                }}>
                     <img src={img}/>
                </div>
            </div>
                </>
              )
            
            })}
           
            
           
            </Slider>
          
        </div>
      </div>
    </>
  )
}

export default Testimonial

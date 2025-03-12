import React from 'react'
import uparrow from '../../assets/image 4.png'
const Accordion3 = () => {
  return (
    <>
      <div className='universal_container' style={{
        paddingBottom:'80px'
      }}>
      <h1 className='heading text-center'>Frequently Asked Questions </h1>
                  <div className='accordian_wrapper'>
                  {[1,2,3,4].map((e,i)=>{
                    return (
                      <>
                      <div className='accordian_question_wrapper'>
                     <div>
                     <div className='accordian_question'>Does , Marriot  only Provide Services for Property Buying and renting?</div>
{  i === 0 &&                   <div className='accordian_answer'>waystay also offers property Consultation, Valuation and investment assistance for both commercial and residental Property needs</div>}
                     </div>
                     <div className='accordion_arrow'>
                            <img src={uparrow}/>
                     </div>
                        
                        
                     </div>
                      </>
                    )
                   
                  })}
                   
                  </div>
      </div>
    </>
  )
}

export default Accordion3

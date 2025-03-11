import React from 'react'
import './Register.css'
import registerImg from '../../assets/image (7).png'

const Register = () => {
  return (
    <div className='register-page'>
      <div className="register-page-wrapper">
        <div className="register-wrapper-left">
          <img src={registerImg} alt="" />
        </div>
        <div className="register-wrapper-right">
          <div className="register-form-wrapper">
              <h3 className='marriot-text'>Marriot</h3>
              <p className='collections-txt'>Collections</p>
              <h3 className='register-txt'>Register</h3>
              <form className="register-form">
              <div className="register-form-group">
              <label htmlFor="email">Email ID</label>
              <input type="text" placeholder='Enter email id' />
              </div>
              <div className="register-form-group">
                <label htmlFor="">Set Password</label>
                <input type="text" placeholder='Enter new password' />
              </div>

              <div className="register-form-group">
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder='Enter confirm password' />
              </div>

              <button className='register-btn'>Register</button>
                
              </form>

              <div className='form-divider'> <span>Or Register with</span></div>
              <div className="google-facebook">
                <button><i class="fa-brands fa-google"></i></button>
                <button><i class="fa-brands fa-facebook" style={{color:"#0F2E68"}}></i></button>
                <button><i class="fa-brands fa-apple"></i></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

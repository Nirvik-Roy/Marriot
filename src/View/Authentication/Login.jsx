import React, { useEffect } from 'react'
import loginImg from '../../assets/image (7).png'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'instant'})
  },[])
  return (
    <div className='login-page'>
      <div className="login-page-wrapper">
        <div className="login-wrapper-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="login-wrapper-right">
          <div className="login-form-wrapper">
          <h3 className='marriot-text'>Marriot</h3>
              <p className='collections-txt'>Collections</p>
              <h3 className='register-txt'>Login</h3>
              <form className="login-form">
                <div className="login-form-group">
                  <label htmlFor="">Email Id</label>
                  <input type="text" placeholder='Enter email id' />
                </div>
                <div className="login-form-group">
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder='Enter password' />
                </div>
                <button className='login-btn' onClick={()=>navigate('/home')}>Login</button>
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

export default Login

import React ,{useState} from 'react'
import location from '../../assets/placeholder 1.png'
import calender from '../../assets/placeholder 1 (1).png'
import arrowdown from '../../assets/right-arrow 1.png'
import people from '../../assets/placeholder 1 (2).png'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom'
const ClientInformation = () => {
    const [value, setValue] = useState(new Date());

    const [dropdown,setdropdown]=useState(false)
    const [dropdown2,setdropdown2]=useState(false)
    const [dropdown3,setdropdown3]=useState(false);
    const navigate = useNavigate()
  return (
    <>
      <div className='universal_container'>
        <div className='information_div'>
            <div className='information_div_1'>
                <p onClick={(()=>setdropdown3(!dropdown3))}>Where are you going?</p>
                <div onClick={(()=>setdropdown3(!dropdown3))} className='destination_wrapper'>
                    <img className='information_img' src={location}/>
                    <h5>Destination</h5>
                </div>
              { dropdown3 && <div className='dropdown_div'>
                    <ul>
                        <li>USA</li>
                        <li>Spain</li>
                        <li>California</li>
                        <li>Tokyo</li>
                        <li>London</li>
                        <li>Durbey</li>
                    </ul>
                    
                </div>}
            </div>
            <div className='information_div_1' style={{
                cursor:'pointer',
            }}>
                <p onClick={(()=>{setdropdown(!dropdown)})}>Check In</p>
                <div className='destination_wrapper' onClick={(()=>{setdropdown(!dropdown)})}>
                    <img className='information_img' src={calender}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>8 Mar 25 <img className='arrow-down-img' style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>
           { dropdown &&    <div className='calendar'>
      <Calendar  onChange={setValue} value={value} />
    </div>}
            </div> 
            <div className='information_div_1'>
            <p onClick={(()=>setdropdown2(!dropdown2))}>Check Out</p>
                <div className='destination_wrapper'  onClick={(()=>setdropdown2(!dropdown2))}>
                    <img className='information_img' src={calender}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>8 Mar 25 <img style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>

                { dropdown2 &&    <div className='calendar'>
      <Calendar  onChange={setValue} value={value} />
    </div>}
            </div>
            <div className='information_div_1'>
            <p>Guests?</p>
                <div className='destination_wrapper'>
                    <img className='information_img' src={people}/>
                    <h5 style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        columnGap:'8px'
                    }}>1 room, 2 adults <img style={{
                        width:'18px'
                    }} src={arrowdown}/> </h5>
                </div>
            </div>
            <div className='information_div_2'>
                <button onClick={(()=>navigate('/filter'))}>Search</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ClientInformation

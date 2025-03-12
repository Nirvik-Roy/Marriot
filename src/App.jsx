import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './View/Authentication/Register'
import Login from './View/Authentication/Login'
import Cart from './View/Cart/Cart'
import Payment from './View/Payment/Payment'
import Home from './View/Home/Home'
import Confirmation from './View/Payment/Confirmation'
function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/confirmation' element={<Confirmation />} />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App

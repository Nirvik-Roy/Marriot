import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './View/Authentication/Register'
import Login from './View/Authentication/Login'
import Cart from './View/Cart/Cart'
import Payment from './View/Payment/Payment'
function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App

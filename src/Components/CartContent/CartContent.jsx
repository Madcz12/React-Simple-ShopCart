import { useContext } from 'react'
import { Context } from '../../Context/Context'

import Navbar from "../Navbar/Navbar"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import './CartContent.css'


const CartContent = () => {
  const {cart} = useContext(Context)
  return(
    <>
      <Navbar/>
      {cart.length > 0 ? (
        <>
          <CartElements/>
          <CartTotal/>
        </>
      ) : (
        <h2 className='cart-message-center'>Your Cart is Empty</h2>
      )}
    </>
  )
}

export default CartContent
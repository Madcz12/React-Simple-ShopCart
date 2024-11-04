import { useContext } from 'react'
import { Context } from '../../Context/Context'

const CartTotal = () => {
    const {cart} = useContext(Context)

    const total = cart.reduce((acc, el) => acc+el.price * el.quanty, 0)
    console.log(total)
  return (
    <div  className='cart-total'>
        <h3>Total a pagar: {total}</h3>
    </div>
  )
}

export default CartTotal
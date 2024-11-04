import { useContext } from 'react'
import { Context } from '../../Context/Context'


const CartItemCounter = ({product}) => {
    const {cart, setCart, buyProducts} = useContext(Context) // funcion que modifica el estado del carrito
    const decrease = () => {
        const productRepeat = cart.find((item) => item.id === product.id)
            productRepeat.quanty !== 1 && 
            setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1} : item)))
        
    }
  return (
    <>
        <p className="counter-button" onClick={decrease}>-</p>
        <p>{product.quanty}</p>
        <p className="counter-button" onClick={() => buyProducts(product)}>+</p>
    </>
  )
}

export default CartItemCounter
import React from 'react'
import {useCart} from '../context.js/cart'
import Products from './products'
import CartItem from '../components/cartItem'
import SavedItem from '../components/savedItem'
function Cart() {

    const {cart,saved}=useCart()
  return (
    <div>
        Cart
        {cart.length !==0 ? cart.map((cartItem)=>{
            return <CartItem cartItem={cartItem} key={cartItem.id}/>
        }) :<div><h1>Cart is empty</h1></div>}
        <div>
            <hr/>
        <h1>saved items</h1>
        {saved.length!==0 ?
        saved.map((savedItem)=><SavedItem savedItem={savedItem} key={savedItem.id}/>):"empty"
    }
    </div>
    </div>
  )
}

export default Cart
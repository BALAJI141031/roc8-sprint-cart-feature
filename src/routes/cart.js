import React from 'react'
import {useCart} from '../context.js/cart'
import Products from './products'
import CartItem from '../components/cartItem'

function Cart() {

    const {cart}=useCart()
  return (
    <div>
        Cart
        {cart.length !==0 && cart.map((cartItem)=>{
            return <CartItem cartItem={cartItem}/>
        }) }
    </div>
  )
}

export default Cart
import React from 'react'
import {useCart} from '../context.js/cart'
import Products from './products'
import CartItem from '../components/cartItem'
import SavedItem from '../components/savedItem'
import {useState} from 'react'
function Cart() {

    const {cart,saved}=useCart()
    let cartInitialPrice
    let initialDiscount
    if(cart.length!==0){
        cartInitialPrice=cart.reduce((acc,item)=>acc+item.price,0)
    }else{
        cartInitialPrice=0
    }
    if(cart.length!==0){
        initialDiscount=cart.reduce((acc,item)=>acc+item.discount,0)
    }else{
        initialDiscount=0
    }
    const [sum,setSum]=useState(cartInitialPrice)
    const [discount,setDiscount]=useState(initialDiscount)
  return (
   <div className='cart-section'> <div>
        Cart
        {cart.length !==0 ? cart.map((cartItem)=>{
            return <CartItem cartItem={cartItem} key={cartItem.id} setSum={setSum} setDiscount={setDiscount}/>
        }) :<div><h1>Cart is empty</h1></div>}
        <div>
            <hr/>
        <h1>saved items</h1>
        {saved.length!==0 ?
        saved.map((savedItem)=><SavedItem savedItem={savedItem} key={savedItem.id} setSum={setSum} setDiscount={setDiscount}/>):"empty"
    }
    </div>

    </div>
    <div>
        price detials
        <div className='flex-div'>
        <p>Price ({cart.length})</p>
        <p>{sum}</p>
      </div>
      <div className='flex-div'>
        <p>Discount</p>
        <p>{discount}</p>
      </div>
      <div className='flex-div'>
        <p>Final Amount</p>
        <p>{sum-discount}</p>
      </div>
    </div>
    </div>
  )
}

export default Cart
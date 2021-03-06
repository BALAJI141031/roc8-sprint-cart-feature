import React from 'react'
import {useState,useReducer} from 'react'
import {useCart} from '../context.js/cart'
function CartItem({cartItem,setSum,setDiscount}) {
    const {dispatchCart}=useCart()

    const setCounterCb=(counter,action)=>{ 

        if(action.type==="increase"){
            setSum((prevSum)=>prevSum+cartItem.price)
            setDiscount((prevDiscount)=>prevDiscount+cartItem.discount)
            return counter=counter+1
        }else{
            setSum((prevSum)=>prevSum-cartItem.price)
            setDiscount((prevDiscount)=>prevDiscount-cartItem.discount)
            return counter=counter-1
        }
    }

    const [counter,setCounter]=useReducer(setCounterCb,1)
  return (
   <div className='cart-item'>
            <img src={cartItem.imageUrl}/>
            <p>{cartItem.brand}</p>
            <p>original price{cartItem.price}</p>
            <p>Discount:{cartItem.discount}</p>
            <div className='quantity-section'>
                
             <button disabled={counter<=1?true:false} onClick={()=>setCounter({type:"decrease"})}>
                -
            </button>
            <p>{counter}</p>
            <button onClick={()=>setCounter({type:"increase"})}>
                +
            </button>
            </div>
            <button onClick={()=>{
                setSum((prevSum)=>prevSum -counter*cartItem.price)
                setDiscount((prevDiscount)=>prevDiscount -counter*cartItem.discount)
                dispatchCart({type:"remove",payload:cartItem.id})}
                }>Remove</button>
            <button onClick={()=>{
                dispatchCart({type:"save",payload:cartItem})
                setDiscount((prevDiscount)=>prevDiscount-counter*cartItem.discount)
                setSum((prevSum)=>prevSum -counter*cartItem.price)
                }}>Save For Later</button>
        </div>
  )
}

export default CartItem
import React from 'react'
import {useState,useReducer} from 'react'
import {useCart} from '../context.js/cart'
function CartItem({cartItem}) {
    const {dispatchCart}=useCart()

    const setCounterCb=(counter,action)=>{ 
        console.log(action.type)       

        if(action.type==="increase"){
            return counter=counter+1
        }else{
            return counter=counter-1
        }
    }

    const [counter,setCounter]=useReducer(setCounterCb,1)
  return (
   <div>
            <img src={cartItem.imageUrl}/>
            <p>{cartItem.brand}</p>
            <div className='quantity-section'>
                <button onClick={()=>setCounter({type:"increase"})}>
                +
            </button>
            <p>{counter}</p>
             <button disabled={counter<=0?true:false} onClick={()=>setCounter({type:"decrease"})}>
                -
            </button>
            </div>
            <button onClick={()=>dispatchCart({type:"remove",payload:cartItem.id})}>Remove</button>
            <button onClick={()=>dispatchCart({type:"save",payload:cartItem})}>Save For Later</button>

            {

            }
        </div>
  )
}

export default CartItem
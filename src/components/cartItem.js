import React from 'react'
import {useState,useReducer} from 'react'

function CartItem({cartItem}) {

    const setCounterCb=(counter,action)=>{ 
        console.log(action.type)       

        if(action.type==="increase"){
            return counter=counter+1
        }else{
            return counter=counter-1
        }
        // return result
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

        </div>
  )
}

export default CartItem
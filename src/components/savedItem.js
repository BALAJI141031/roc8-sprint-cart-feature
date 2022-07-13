import React from 'react'
import {useCart} from '../context.js/cart'
function SavedItem({savedItem,setSum}) {
    const {dispatchCart}=useCart()
  return (
    <div>
        <img src={savedItem.imageUrl}/>
        <p>{savedItem.brand}</p>
        <button onClick={()=>{
            dispatchCart({type:"cart",payload:savedItem,falg:true})
            setSum((prevSum)=>prevSum +savedItem.price)
        }
            }>Move TO cart</button>
    </div>
  )
}

export default SavedItem
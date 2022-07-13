import React from 'react'
import {useCart} from '../context.js/cart'
function SavedItem({savedItem}) {
    const {dispatchCart}=useCart()
  return (
    <div>
        <img src={savedItem.imageUrl}/>
        <p>{savedItem.brand}</p>
        <button onClick={()=>dispatchCart({type:"cart",payload:savedItem,falg:true})}>Move TO cart</button>
    </div>
  )
}

export default SavedItem
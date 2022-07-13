import React from 'react'
import {useCart} from '../context.js/cart'
function SavedItem({savedItem,setSum,setDiscount}) {
    const {dispatchCart}=useCart()
  return (
    <div className='cart-item'>
        <img src={savedItem.imageUrl}/>
        <p>{savedItem.brand}</p>
        <button onClick={()=>{
            dispatchCart({type:"cart",payload:savedItem,falg:true})
            setSum((prevSum)=>prevSum +savedItem.price)
            setDiscount((prevDiscount)=>prevDiscount +savedItem.discount)

        }
            }>Move TO cart</button>
    </div>
  )
}

export default SavedItem
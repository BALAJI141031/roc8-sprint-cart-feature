import React from 'react'
import {dbProducts} from '../db' 
import {useCart} from "../context.js/cart"
import {useNavigate} from 'react-router-dom'
function Products() {
    const {dispatchCart,cart}=useCart()
    const navigate=useNavigate()
  const cartIds=cart.map((cartItem)=>cartItem.id)

    const renderedProducts=dbProducts.products.map((product)=>{
        return <div key={product.id} className="ver-card ">
            <img src={product.imageUrl}/>
            <p>{product.brand}</p>
            <button onClick={()=>{
                if(!cartIds.includes(product.id)){
                    dispatchCart({type:"cart",payload:product})
                }else{
                navigate("/cart")    
                }
            }
                }>{cartIds.includes(product.id)?"Goto Cart":"add to cart"}</button>
            </div>
    })
  return (
    <div>
      <h1>Products</h1>
      <h2>Cart count:{cart.length}</h2>
      <div className='flex-wrap-div'>
    {renderedProducts}
    </div>
    </div>
  )
}

export default Products
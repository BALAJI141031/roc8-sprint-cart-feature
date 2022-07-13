import React from 'react'
import {dbProducts} from '../db' 
function Products() {
    console.log(dbProducts)
    const renderedProducts=dbProducts.products.map((product)=>{
        return <div key={product.id} className="product-div">
            <img src={product.imageUrl}/>
            <p>{product.brand}</p>
            <button>Add to cart</button>
            </div>
    })
  return (
    <div>Products
    {renderedProducts}

    </div>
  )
}

export default Products
import React from 'react'
import { createContext,useContext,useReducer} from 'react'

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const reducerFn = (cartState, action) => {
    switch (action.type) {
      case "cart":
        let savedItemsFromCart=[]
        if(action.flag){
           savedItemsFromCart=cartState.saved.filter((prodct)=>prodct.id!==action.payload.id)
        }
        return {
          ...cartState,
          cart: [...cartState.cart,action.payload],
          saved:savedItemsFromCart
        //   cartCount: action.payload.cartCount,
        };
      case "remove":
        const filteredItems=cartState.cart.filter((product)=>product.id!==action.payload)
        return {...cartState,cart:filteredItems}
      case "save":
        const savedItems=[...cartState.saved,action.payload]
        const cartItems=cartState.cart.filter((product)=>product.id!==action.payload.id)
        return {...cartState,cart:cartItems,saved:savedItems}
      case "cartTotalAmount":
        return { ...cartState, cartTotal: action.payload };
      case "discountAmount":
        return { ...cartState, discount: action.payload };
      default:
        return { ...cartState };
    }
  };

  const [
    { cart, cartCount, cartTotal, discount,saved },
    dispatchCart,
  ] = useReducer(reducerFn, {
    cart: [],
    saved:[],
    cartCount: 0,
    cartTotal: 0,
    discount: 0,
  });

  return (
    <cartContext.Provider
      value={{
        cart,
        dispatchCart,
        cartCount,
        cartTotal,
        discount,
        saved
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };


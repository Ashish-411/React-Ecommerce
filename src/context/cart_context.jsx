import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const getCartData = () =>{
    let LocalCartData = localStorage.getItem("cartProducts");
    if(!LocalCartData){
        return [];
    }
    const parsedData = JSON.parse(LocalCartData);
    return Array.isArray(parsedData) ? parsedData : [];
};

const initialState = {
    cart:getCartData(),
    total_item:"",
    total_price:"",
    shipping_fee: 500,
}

export function CartProvider({children}){
    const[state,dispatch] = useReducer(reducer,initialState);

    const CartAdd = (id, amount, product)=>{
        dispatch({type:"ADD_TO_CART",payload: {id,amount,product}});
    };
    //toggle increase and decrease
    const setIncrease = (id) =>{
        dispatch({type:"INCREASE_PRODUCT",payload:id})
    }
    const setDecrease = (id) =>{
        dispatch({type:"DECREASE_PRODUCT",payload:id})
    }

    //remove item
    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    };
    // Clear cart products
    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"});
    }
    // Add data to local storage
    useEffect(() =>{
        dispatch({type:"CART_TOTAL_ITEM"})
        localStorage.setItem("cartProducts",JSON.stringify(state.cart));
    },[state.cart]);
    return <CartContext.Provider 
            value ={{...state,
                     CartAdd,
                     removeItem,
                     clearCart,
                     setIncrease,
                     setDecrease}}>
        {children}
    </CartContext.Provider>
}
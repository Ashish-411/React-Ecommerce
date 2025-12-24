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
    total_amount:"",
    shipping_fee: 500,
}

export function CartProvider({children}){
    const[state,dispatch] = useReducer(reducer,initialState);

    const CartAdd = (id, amount, product)=>{
        dispatch({type:"ADD_TO_CART",payload: {id,amount,product}});
    };
    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    };
    // Add data to local storage
    useEffect(() =>{
        localStorage.setItem("cartProducts",JSON.stringify(state.cart));
    },[state.cart]);
    return <CartContext.Provider value ={{...state,CartAdd,removeItem}}>
        {children}
    </CartContext.Provider>
}
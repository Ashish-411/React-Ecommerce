import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const initialState = {
    cart:[],
    total_item:"",
    total_amount:"",
    shipping_fee: 500,
}

export function CartProvider({children}){
    const[state,dispatch] = useReducer(reducer,initialState);

    const CartAdd = (id, amount, product)=>{
        dispatch({type:"ADD_TO_CART",payload: {id,amount,product}});

    };
    return <CartContext.Provider value ={{...state,CartAdd}}>
        {children}
    </CartContext.Provider>
}
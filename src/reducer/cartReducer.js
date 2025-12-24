const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            let{id,amount,product} = action.payload;
        let cartProduct;
        cartProduct={
            id: id,
            name: product.title,
            amount,
            image: product.image,
            price: product.price,
        }
        return{
            ...state,
            cart: [...state.cart,cartProduct],
        }
        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter(
            (curElem) => curElem.id != action.payload);
        return{
            ...state,
            cart: updatedCart,
        }
        case "CLEAR_CART":
            return{
            ...state,
            cart:[],
        }
        case "INCREASE_PRODUCT":
            {
             let updatedProduct= state.cart.map((curElem) =>{
                if(curElem.id === action.payload){
                    let IncAmount = curElem.amount+1;
                    return{
                        ...curElem,
                        amount: IncAmount,
                    }
                }
                else{
                    return{
                        ...curElem,
                    }
                }
            })
            return{
                ...state,
                cart: updatedProduct,

            }
        }
        case "DECREASE_PRODUCT":
            let updatedProduct= state.cart.map((curElem) =>{
                if(curElem.id === action.payload){
                    let decAmount = curElem.amount-1;
                    if(decAmount <= 1){
                     decAmount = 1;   
                    }
                    return{
                        ...curElem,
                        amount: decAmount,
                    }
                }
                else{
                    return{
                        ...curElem,
                    }
                }
            })
            return{
                ...state,
                cart: updatedProduct,

            }
        case "CART_TOTAL_ITEM":
            let updatedItem = state.cart.reduce((initialVal,curElem) =>{
                let {amount} = curElem;
                initialVal += amount;
                return initialVal;
            },0);
            return{
                ...state,
                total_item: updatedItem,
            }

        default:
            return state;


    }
}
export default cartReducer;
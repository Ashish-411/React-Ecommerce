const cartReducer = (state,action) =>{
    if(action.type === "ADD_TO_CART"){
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
    }
    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter(
            (curElem) => curElem.id != action.payload);
        return{
            ...state,
            cart: updatedCart,
        }
    }

    return state;
}
export default cartReducer;
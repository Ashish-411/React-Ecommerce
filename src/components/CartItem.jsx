import { useCartContext } from "../context/cart_context";
import { FormatPrice } from "../Helpers/FormatPrice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function CartItem({id,name,image,price,amount}){
    const {removeItem,setIncrease,setDecrease} = useCartContext();
    return(
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            {/* price */}
            <div className="cart-hide">
                <p>{FormatPrice(price)}</p>
            </div>
            {/* quantity */}
            <div className="amount-toggle">
                      <button onClick={() => setDecrease(id)}>
                        <FaMinus/>
                      </button>
                      <div className="amount-style">{amount}</div>
                      <button onClick={() => setIncrease(id)}>
                        <FaPlus/>
                      </button>
            </div>
            {/* sub total */}
            <div className="cart-hide">
                <p>{FormatPrice(price*amount)}</p>
            </div>
            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
            </div>
        </div>
    );
}
export default CartItem;
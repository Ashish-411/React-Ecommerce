import { useCartContext } from "../context/cart_context";
import { FormatPrice } from "../Helpers/FormatPrice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function CartItem({id,name,image,price,amount}){
    const {removeItem} = useCartContext();
    const setDecrease=()=>{
        console.log("hi");
    // amount > 1? setAmount(amount-1) : setAmount(1);
  }
  const setIncrease=()=>{
    console.log("hello");
    // setAmount(amount+1);
  }
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
                      <button onClick={() => setDecrease()}>
                        <FaMinus/>
                      </button>
                      <div className="amount-style">{amount}</div>
                      <button onClick={() => setIncrease()}>
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
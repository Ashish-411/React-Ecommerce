import { useState } from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button";
function AddToCart(){
  const [amount,setAmount] = useState(1);
  const setDecrease=()=>{
    amount > 1? setAmount(amount-1) : setAmount(1);
  }
  const setIncrease=()=>{
    setAmount(amount+1);
  }
    return(
      <Wrapper className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => setDecrease()}>
            <FaMinus/>
          </button>
          <div className="amount-style">{amount}</div>
          <button onClick={() => setIncrease()}>
            <FaPlus/>
          </button>
        </div>
        <NavLink to="/cart">
        <Button>Add to cart</Button>
        </NavLink>
      </Wrapper>
    );

}
export default AddToCart;
const Wrapper = styled.section`
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
    .cart-button{
      width: 140px;
      height:100px:
    }

  /* we can use it as a global one too  */
  .amount-toggle {
    width:100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    gap:1.5rem;
   


    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
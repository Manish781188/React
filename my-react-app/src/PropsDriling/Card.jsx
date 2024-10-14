import React, { useContext } from 'react';
import { CartContext } from './Contex';
import './Card.css'
const Cart = ({ }) => {
  // console.log(cartData,"hello ");
  let { cart ,dispatch} = useContext(CartContext)
  console.log(cart, "context");

  const handleRemove = (id) => {
    dispatch({type: 'remove' ,payload: {id}})
  }


  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <button onClick={()=>{handleRemove(item.id)}}>Remove</button>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
import React, { useContext } from "react";
import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {

  const cartCntx = useContext(CartContext);
  //const cartItems = [{ id: "c1", name: "Sushi", value: 12.99, amount: 4 }];
  //const uList = cartCntx.items.map((item) => <li className="cart-li">{item.name}</li>);
 /*  const uList = cartCntx.items.map((item) => (
                                              <CartItem key={item.id} 
                                                        name={item.name} 
                                                        amount={item.amount} 
                                                        price={item.price} 
                                                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                                        onAdd={cartItemAddHandler.bind(null, item)}
                                              />
                                            )
                                    );
  console.log(uList);                                     */
  const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;
  const hasItems = cartCntx.items.length > 0;

  const cartItemRemoveHandler = id => {};

  const cartItemAddHandler = item => {};

  return (
    <Modal onClose={props.onCloseCart}>
      <Card cardId='card-cart'>
        <ul className="cart-ul">
          {
            cartCntx.items.map((item) =>
              <CartItem key={item.id} 
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price} 
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)} />
            )
          }
        </ul>
        <div className="cart-total">
            <span>Total:</span>
            <span>{totalAmount}</span>
        </div>
        <div className="cart-buttons">
            <Button caption='Close' class='btn btn-close' onClick={props.onCloseCart}/>
            {hasItems && <Button caption ='Order' class='btn ui-btn'/>}
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;

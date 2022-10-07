import React from "react";
import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from "../UI/Button";

import "./Cart.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", value: 12.99, amount: 4 }];
  const uList = cartItems.map((item) => <li className="cart-li">{item.name}</li>);

  return (
    <Modal onClose={props.onCloseCart}>
      <Card cardId='card-cart'>
        <ul className="cart-ul">{uList}</ul>
        <div className="cart-total">
            <span>Total:</span>
            <span>35.65</span>
        </div>
        <div className="cart-buttons">
            <Button caption='Close' class='btn btn-close' onClick={props.onCloseCart}/>
            <Button caption ='Order' class='btn ui-btn'/>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;

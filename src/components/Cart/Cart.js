import React, { useContext } from "react";

import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    const totalAmount = `Rs| ${cartCtx.totalAmount}`

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={`${item.id}-${item.size}`} // Ensure uniqueness by combining id and size
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    size={item.size} // Pass the size to the CartItem component
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onCloseCart}>
            <div>{cartItems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
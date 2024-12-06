import React, { useContext } from 'react';

import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `Rs | ${props.price}`;

    const addItemHandler = () => {
        // Add one more of this item
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            size: props.size,
            quantity: 1, // Increment quantity
            price: props.price,
        });
    };

    const removeItemHandler = () => {
      // Remove one unit of the item from the cart
      cartCtx.removeItem(props.id);
  };

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name} (Size: {props.size})</h2>
                <div className={classes.summary}>
                    <span className={classes.description}>{props.description}</span>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemHandler}>−</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;

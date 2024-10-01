import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [items, updateItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        updateItems((prevItems) => {
            const existingCartItemIndex = prevItems.findIndex(
                (cartItem) => cartItem.id === item.id && cartItem.size === item.size
            );
            const existingCartItem = prevItems[existingCartItemIndex];
    
            let updatedItems;
    
            if (existingCartItem) {
                // If the item already exists in the cart, update its quantity
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + item.quantity,
                };
                updatedItems = [...prevItems];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                // If the item is new, add it to the cart
                updatedItems = prevItems.concat(item);
            }
    
            return updatedItems;
        });

        // Update total amount
        setTotalAmount((prevTotal) => prevTotal + item.price * item.quantity);
    };
    


    const removeItemFromCartHandler = (id) => { };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log('Inside CartContext.Provider', cartContext)}
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
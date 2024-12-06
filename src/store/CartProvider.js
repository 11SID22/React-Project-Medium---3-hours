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
    


    const removeItemFromCartHandler = (id) => {
        updateItems((prevItems) => {
            // Find the item by its id
            const existingCartItemIndex = prevItems.findIndex(item => item.id === id);
    
            // If item doesn't exist, return previous state unchanged
            if (existingCartItemIndex === -1) {
                console.error(`Item with id ${id} not found in the cart`);
                return prevItems; // Exit early if item not found
            }
    
            const existingItem = prevItems[existingCartItemIndex];
    
            // Proceed with decrementing quantity or removing item
            let updatedItems;
    
            if (existingItem.quantity === 1) {
                // Remove item from cart when quantity is 1
                updatedItems = prevItems.filter(item => item.id !== id);
            } else {
                // Decrease quantity by 1
                const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
                updatedItems = [...prevItems];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
    
            return updatedItems;
        });
    };
    

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
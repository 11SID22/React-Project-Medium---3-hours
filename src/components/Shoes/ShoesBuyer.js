import React, { useContext, useState } from "react";
import classes from './ShoesBuyer.module.css'; // Import the CSS module
import Card from "../UI/Card";
import CartContext from "../../store/cart-context";

const ShoesBuyer = (props) => {
    const cartCtx = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const quantityChangeHandler = (itemId, event) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: event.target.value,
        }));
    };

    const addToCart = (item, size) => {
        const quantity = quantities[item.id] || 1; // Default to 1 if no quantity specified
    
        cartCtx.addItem({
            id: item.id, // Use item.id instead of props.id
            name: item.name,
            description: item.description,
            size: size,
            quantity: +quantity,
            price: item.price, // Use item.price instead of props.price
        });
        console.log('Added to Cart', cartCtx)
    };
    

    const shoesList = props.shoes.map((item) => (
        <li key={item.id} className={classes.li}>
            <span>{item.name} - {item.description}</span>
            <span className={classes.price}>Rs | {item.price}</span>
            <span className={classes.size}>Available Sizes: {item.size}</span>
            <div>
                <input
                    type="number"
                    value={quantities[item.id] || 1}
                    onChange={(event) => quantityChangeHandler(item.id, event)}
                    min="1"
                    max="10"
                    step='1'
                    className={classes.quantityInput}
                />
                <button onClick={() => addToCart(item, 'L')}>Add L</button>
                <button onClick={() => addToCart(item, 'M')}>Add M</button>
                <button onClick={() => addToCart(item, 'S')}>Add S</button>
            </div>
        </li>
    ));

    return (
        <Card className={classes.card}>
            <ul className={classes.ul}>{shoesList}</ul>
        </Card>
    );
};

export default ShoesBuyer;

import React from "react";
import classes from './ShoesBuyer.module.css'; // Import the CSS module
import Card from "../UI/Card";

const ShoesBuyer = (props) => {
    const shoesList = props.shoes.map((item) => (
        <li key={item.id} className={classes.li}>
            <span>{item.name} - {item.description}</span> 
            <span className={classes.price}>Rs | {item.price}</span>
            <span className={classes.quantity}>Available Sizes: {item.quantity}</span>

        </li>
    ));
    
    return (
        <Card className={classes.card}>
            <ul className={classes.ul}>
                {shoesList}
            </ul>
        </Card>
    );
};

export default ShoesBuyer;

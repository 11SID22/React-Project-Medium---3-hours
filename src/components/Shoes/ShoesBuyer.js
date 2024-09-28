import React from "react";
import Card from "../UI/Card";

const ShoesBuyer = (props) => {
    const shoesList = props.shoes.map((item) => (
        <li key={item.id}>
            {item.name} - {item.description} - Rs| {item.price} - Available Sizes: {item.quantity}
        </li>
    ));
    
    return (
        <Card>
            <ul>
                {shoesList}
            </ul>
        </Card>
    );
};

export default ShoesBuyer;

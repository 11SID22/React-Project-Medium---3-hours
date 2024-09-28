import React, { useState } from 'react';
import ShoesSeller from './ShoesSeller';
import ShoesBuyer from './ShoesBuyer';

const ShoesApp = () => {
    const [shoesList, setShoesList] = useState([
        {
            id: 'a1',
            name: 'Nike',
            description: '100% cotton',
            price: '1000',
            quantity: '15'
        },
        {
            id: 'b1',
            name: 'Adidas',
            description: '100% leather',
            price: '5000',
            quantity: '25'
        }
    ]);

    const addShoeHandler = (shoe) => {
        setShoesList((prevShoesList) => [
            ...prevShoesList,
            { ...shoe, id: Math.random().toString() } // Add a new shoe to the list
        ]);
    };

    return (
        <div>
            <ShoesSeller onAddShoe={addShoeHandler} />
            <ShoesBuyer shoes={shoesList} />
        </div>
    );
};

export default ShoesApp;

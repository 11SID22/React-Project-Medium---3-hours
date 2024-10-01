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
            size: ['L:1, M:7, S:20'],
        },
        {
            id: 'b1',
            name: 'Adidas',
            description: '100% leather',
            price: '5000',
            size: ['L:19, M:70, S:34']
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

import React, { useState } from 'react';
import classes from './ShoesSeller.module.css';
import Card from '../UI/Card';

const ShoesSeller = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredQuantityL, setEnteredQuantityL] = useState('');
    const [enteredQuantityM, setEnteredQuantityM] = useState('');
    const [enteredQuantityS, setEnteredQuantityS] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const descChangeHandler = (event) => {
        setEnteredDesc(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const quantityLChangeHandler = (event) => {
        setEnteredQuantityL(event.target.value)
    }
    const quantityMChangeHandler = (event) => {
        setEnteredQuantityM(event.target.value)
    }
    const quantitySChangeHandler = (event) => {
        setEnteredQuantityS(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault();

        if (
            enteredName.trim() === '' ||
            enteredDesc.trim() === '' ||
            enteredPrice.trim() === '' ||
            enteredQuantityL.trim() === '' ||
            enteredQuantityM.trim() === '' ||
            enteredQuantityS.trim() === ''
        ) {
            setFormIsValid(false);
            return ;
        }  
        
        const newShoe = {
            name: enteredName,
            description: enteredDesc,
            price: enteredPrice,
            size: `L:${enteredQuantityL}, M:${enteredQuantityM}, S:${enteredQuantityS}`
        };
        console.log(newShoe)
        props.onAddShoe(newShoe); // Pass the new shoe to the parent component

        // Reset form fields
        setEnteredName('');
        setEnteredDesc('');
        setEnteredPrice('');
        setEnteredQuantityL('');
        setEnteredQuantityM('');
        setEnteredQuantityS('');
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor="name">Shoe Name:</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameChangeHandler} />
                <label htmlFor="desc">Description:</label>
                <input
                    type="text"
                    id="desc"
                    value={enteredDesc}
                    onChange={descChangeHandler} />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={enteredPrice}
                    onChange={priceChangeHandler} />
                <h3>Quantity Available</h3>
                <label htmlFor="L">L:</label>
                <input
                    type="number"
                    id="L"
                    value={enteredQuantityL}
                    onChange={quantityLChangeHandler} />
                <label htmlFor="M">M:</label>
                <input
                    type="number"
                    id="M"
                    value={enteredQuantityM}
                    onChange={quantityMChangeHandler} />
                <label htmlFor="S">S:</label>
                <input
                    type="number"
                    id="S"
                    value={enteredQuantityS}
                    onChange={quantitySChangeHandler} />
                <button type="submit" className={classes.shoeFormButton}>Add Product</button>
            </form>
                  
        </Card>
    );
};

export default ShoesSeller;

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `Rs|${props.price}`;

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
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
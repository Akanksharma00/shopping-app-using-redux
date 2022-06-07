import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartVisibilityHandler = () => {
    dispatch(cartActions.isCartVisible());
  }

  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

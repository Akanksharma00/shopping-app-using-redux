import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/uiReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const cartVisibilityHandler = () => {
    dispatch(uiActions.isCartVisible());
  }

  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

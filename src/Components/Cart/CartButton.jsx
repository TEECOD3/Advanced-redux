import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/UI-slice";
import { useSelector } from "react-redux";

const CartButton = () => {
  const totalquantity = useSelector((state) => state.cartStore.totalquantity);
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={onclickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;

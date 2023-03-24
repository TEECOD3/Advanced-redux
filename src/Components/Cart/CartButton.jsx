import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/UI-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const onclickHandler = () => {
    console.log("yuueu");
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={onclickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

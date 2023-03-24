import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const { onclick } = props;
  return (
    <button className={classes.button} onClick={onclick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartdats = useSelector((state) => state.cartStore.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartdats.map((item) => (
          <CartItem
            key={item.id}
            title={item.name}
            quantity={item.quantity}
            total={item.totalprice}
            price={item.price}
            id={item.id}
          />
        ))}
        {/* <CartItem
          item={{ title: "Test Item", quantity: 3, total: 19, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;

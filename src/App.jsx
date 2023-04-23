import React, { useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Product";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./Store/Cartslice";
import Notification from "./Components/UI/Notification";

let initial = true;
function App() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartStore.cartItems);
  const cartstate = useSelector((state) => state.uiStore.cartModal);
  const notification = useSelector((state) => state.uiStore.Notification);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendCartData(cartdata));
  }, [dispatch, cartdata]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {cartstate && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

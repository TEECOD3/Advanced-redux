import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Product";
import { useSelector } from "react-redux";

function App() {
  const cartstate = useSelector((state) => state.uiStore.cartModalOpen);
  return (
    <Layout>
      {cartstate && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

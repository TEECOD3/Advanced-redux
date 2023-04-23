import ProductItem from "./ProductItem";
import classes from "./Product.module.css";

const dummyproduct = [
  {
    id: 1,
    title: "body lotion",
    price: 9,
    description: "epara that will make your skin sweet",
  },
  {
    id: 2,
    title: "hair cream",
    price: 30,
    description: "cream that will make your hair sweet",
  },
];

// {
//     id: dummyproduct.id,
//     title: dummyproduct.title,
//     price: dummyproduct.price,
//     amount: 1,
//   }

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyproduct.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

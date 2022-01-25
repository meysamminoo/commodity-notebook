import Styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={Styles.product}>
      <h1>{props.title}</h1>
      <h2>{props.category}</h2>
    </div>
  );
};

export default Product;

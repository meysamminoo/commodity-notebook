import { useState } from "react";
import Styles from "./App.module.css";
import Header from "./Component/Header/Header";
import Icon from "@mdi/react";
import { mdiPlusThick } from "@mdi/js";
import Product from "./Component/Product/Product";

const App = () => {
  // todo: get input for add category
  const [inputValue, setInputValue] = useState("");
  // todo: get input for add title product
  const [inputProduct, setInputProduct] = useState("");
  // todo: gategory products
  const [categorys, setCategorys] = useState([
    {
      label: "Uncategory",
      value: "Uncategory",
    },
  ]);
  // todo: selected select option for category product
  const [selectCategory, setSelectCategory] = useState("Uncategory");

  // todo: Products and gategorys
  const [products, setProducts] = useState([{ title: "", category: "" }]);

  const setHandler = () => {
    setProducts([
      ...products,
      { title: inputProduct, category: selectCategory },
    ]);
    setInputProduct("");
  };

  // const handleChange = (e) => {
  //   setCat(e.target.value);
  // };

  return (
    <main className={Styles.container}>
      <Header />
      <p className={Styles.description}>
        Hint: you can add new group, if not just existed.
      </p>
      <div className={Styles.boxAddCategory}>
        <input
          type="text"
          className={Styles.input}
          placeholder="Add category"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={Styles.btn}
          onClick={() => {
            setCategorys([
              ...categorys,
              { value: inputValue, label: inputValue },
            ]);
            setInputValue("");
          }}
        >
          <Icon
            className={Styles.icon}
            path={mdiPlusThick}
            title="Add Category"
            size={3}
            color={"#333"}
          />
        </button>
      </div>
      <p className={Styles.description}>
        Hint: To classify the products select group and type product name.
      </p>
      <select
        className={`${Styles.input} ${Styles.select}`}
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
      >
        {categorys.map((category, index) => {
          return (
            <option value={category.value} key={index}>
              {category.label}
            </option>
          );
        })}
      </select>

      <div className={Styles.boxAddProduct}>
        <input
          type="text"
          className={Styles.input}
          placeholder="Product"
          value={inputProduct}
          onChange={(e) => setInputProduct(e.target.value)}
        />
        <button
          className={`${Styles.btn} ${Styles.btnSet}`}
          onClick={setHandler}
        >
          Set
        </button>
      </div>
      <div className={Styles.boxProduct}>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              title={product.title}
              category={product.category}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;

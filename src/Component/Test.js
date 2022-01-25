import { useEffect, useRef, useState } from "react";
import styles from "./Test.module.css";

const Test = () => {
  const [category, setCategory] = useState([
    {
      label: "Uncategory",
      value: "Uncategory",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const [cat, setCat] = useState("Uncategory");

  const [inputProduct, setInputProduct] = useState("");
  const [products, setProducts] = useState([{ title: "", category: "" }]);

  const setHandler = () => {
    setProducts([...products, { title: inputProduct, category: cat }]);
    setInputProduct("");
  };

  const handleChange = (e) => {
    setCat(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Test</h1>
      <input
        placeholder="Add category"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setCategory([...category, { value: inputValue, label: inputValue }]);
          setInputValue("");
          console.log(category);
        }}
      >
        Set
      </button>
      <select value={cat} onChange={handleChange}>
        {category.map((cat, index) => {
          return (
            <option value={cat.value} key={index}>
              {cat.label}
            </option>
          );
        })}
      </select>
      <input
        placeholder="product"
        value={inputProduct}
        onChange={(e) => setInputProduct(e.target.value)}
      />
      <button onClick={setHandler}>add</button>
      <div>
        {products.map((p, index) => {
          return (
            <div key={index}>
              <h1>{p.title}</h1>
              <h2>{p.category}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;

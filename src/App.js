import Styles from "./App.module.css";
import Header from "./Component/Header/Header";
import Icon from "@mdi/react";
import { mdiPlusThick } from "@mdi/js";
import { useEffect, useRef, useState } from "react";
import Product from "./Component/Product/Product";
import Test from "./Component/Test";

const App = () => {
  return <Test />;
  // const [products, setProducts] = useState([{ title: "", category: "" }]);
  // const [inputValue, setInputValue] = useState("");
  // const [categorys, setCategrys] = useState(["Meat", "Vegetable", "Frout"]);
  // const [inputProduct, setInputProduct] = useState("");

  // const changeHandler = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const addCtegoryHandler = () => {
  //   setCategrys([...categorys, inputValue]);
  //   setInputValue("");
  // };

  // const inputProductHandler = (e) => {
  //   setInputProduct(e.target.value);
  // };

  // return (
  //   <main className={Styles.container}>
  //     <Header />
  //     <p className={Styles.description}>
  //       Hint: you can add new group, if not just existed.
  //     </p>
  //     <div className={Styles.boxAddCategory}>
  //       <input
  //         type="text"
  //         className={Styles.input}
  //         placeholder="Add New Category"
  //         onChange={changeHandler}
  //         value={inputValue}
  //       />
  //       <button className={Styles.btn} onClick={addCtegoryHandler}>
  //         <Icon
  //           className={Styles.icon}
  //           path={mdiPlusThick}
  //           title="Add Category"
  //           size={3}
  //           color={"#333"}
  //         />
  //       </button>
  //     </div>
  //     <p className={Styles.description}>
  //       Hint: To classify the products select group and type product name.
  //     </p>
  //     <select className={`${Styles.input} ${Styles.select}`} name="groups">
  //       {categorys.map((category, index) => {
  //         return <option key={index}>{category}</option>;
  //       })}
  //     </select>
  //     <div className={Styles.boxAddProduct}>
  //       <input
  //         type="text"
  //         className={Styles.input}
  //         placeholder="Product"
  //         value={inputProduct}
  //         onChange={inputProductHandler}
  //       />
  //       <button className={`${Styles.btn} ${Styles.btnSet}`}>Set</button>
  //     </div>
  //   </main>
  // );
};

export default App;

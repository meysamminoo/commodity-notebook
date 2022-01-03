import Styles from "./App.module.css";
import Header from "./Component/Header";
import Icon from "@mdi/react";
import { mdiPlusThick } from "@mdi/js";

const App = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <p className={Styles.description}>
        Hint: you can add new group, if not just existed.
      </p>
      <div className={Styles.boxAddCategory}>
        <input
          type="text"
          className={Styles.input}
          placeholder="new Category"
        />
        <button className={Styles.btn}>
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
        name="groups"
        id="groups"
      >
        <option value="Meat">Meat</option>
        <option value="Fruit">Fruit</option>
        <option value="Clothing">Clothing</option>
        <option value="dairy">dairy</option>
      </select>
      <div className={Styles.boxAddProduct}>
        <input type="text" className={Styles.input} placeholder="Product" />
        <button className={`${Styles.btn} ${Styles.btnSet}`}>Set</button>
      </div>
    </div>
  );
};

export default App;

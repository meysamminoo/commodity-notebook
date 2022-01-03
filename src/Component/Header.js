import Styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.headerTitle}>Commodity Notebook</h1>
    </header>
  );
};

export default Header;

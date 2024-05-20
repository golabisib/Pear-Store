import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">GolabiShop</Link>
        <Link to="/checkout">
          <div>
            <IoMdCart />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Golabi means Pear in Farsi(Persian)</p>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;

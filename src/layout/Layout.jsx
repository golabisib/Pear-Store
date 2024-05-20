import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IoMdCart } from "react-icons/io";

// import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
	//const [state] = useCart();
	return (
		<>
			<header className={styles.header}>
				<Link to="/products">GolabiShop</Link>
				<Link to="/checkout">
					<div>
						<IoMdCart />
						{/* {!!state.itemsCounter && <span>{state.itemsCounter}</span>} */}
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

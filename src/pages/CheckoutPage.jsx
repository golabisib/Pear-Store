import { TbMoodAnnoyed, TbMoodLookLeft } from "react-icons/tb";
import BasketCard from "../components/BasketCard";
// import { useCart } from "../context/CartContext";

import { Link } from "react-router-dom";
import BasketSideBar from "../components/BasketSideBar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
	// const [state, dispatch] = useCart();

	const clickHandler = (type, data) => {
		// dispatch({ type, payload: data });
	};

	// if (!state.itemsCounter) {
	// 	return (
	// 		<div>
	// 			<div className={styles.empty}>
	// 				<TbMoodAnnoyed />
	// 				<p> Your Basket is Empty or emty or emT or MT or </p>
	// 			</div>
	// 			<div className={styles.link}>
	// 				<TbMoodLookLeft />
	// 				<Link to="/products">Come with me for Shopping</Link>
	// 			</div>
	// 		</div>
	// 	);
	// }
	return (
		// <div className={styles.container}>
		// 		<BasketSideBar state={state} clickHandler={clickHandler} />
		// 	<div className={styles.product}>
		// 		{state.selectedItems.map((product) => (
		// 			<BasketCard
		// 				key={product.id}
		// 				data={product}
		// 				clickHandler={clickHandler}
		// 			/>
		// 		))}
		// 	</div>
		// </div>
        <div>
            
        </div>
	);
}

export default CheckoutPage;

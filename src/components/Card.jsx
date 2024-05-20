import { FaMinus, FaPlus } from "react-icons/fa";
import { addItem, decrease, increase, removeItem } from "../.features/cart/cartSlice";
import { productQuantity, shortenText } from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";

import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import styles from "./Card.module.css";

// import { useCart } from "../context/CartContext";



function Card({ data }) {
	const { id, title, image, price } = data;

	// const [state, dispatch] = useCart();
    const state = useSelector(store => store.cart);
    const dispatch = useDispatch();

	const quantity = productQuantity(state, id);



	return (
		<div className={styles.card}>
			<img src={image} alt={title} style={{ width: "150px" }} />
			<h3>{shortenText(title)}</h3>
			<p>{price}$</p>

			<div className={styles.actions}>
				<Link to={`/products/${id}`}>
					{" "}
					<TbListDetails />{" "}
				</Link>
				<div>
					{quantity === 0 ? (
						<button type="button" onClick={() => dispatch(addItem(data))}>
							<BiCartAdd />
						</button>
					) : (
						<button type="button" onClick={() => dispatch(increase(data))}>
							<FaPlus />
						</button>
					)}
                    {quantity > 0 ?  <span>{quantity}</span> : null}
					{quantity > 1 && (
						<button type="button" onClick={() => dispatch(decrease(data))}>
							<FaMinus />
						</button>
					)}
					{quantity === 1 && (
						<button type="button" onClick={() => dispatch(removeItem(data))}>
							<RiDeleteBinFill />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.any,
		image: PropTypes.any,
		price: PropTypes.any,
		title: PropTypes.any,
	}),
};

export default Card;

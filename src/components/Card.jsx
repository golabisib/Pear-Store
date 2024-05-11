import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BiCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

import styles from "./Card.module.css";

function Card({ data }) {
	const { id, title, image, price } = data;

	const [state, dispatch] = useCart();

	const quantity = productQuantity(state, id);
	console.log(quantity);

	const clickHandler = (type) => {
		dispatch({ type, payload: data });
	};

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
						<button type="button" onClick={() => clickHandler("ADD_ITEM")}>
							<BiCartAdd />
						</button>
					) : (
						<button type="button" onClick={() => clickHandler("INCREASE")}>
							<FaPlus />
						</button>
					)}
                    {quantity > 0 ?  <span>{quantity}</span> : null}
					{quantity > 1 && (
						<button type="button" onClick={() => clickHandler("DECREASE")}>
							<FaMinus />
						</button>
					)}
					{quantity === 1 && (
						<button type="button" onClick={() => clickHandler("REMOVE_ITEM")}>
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

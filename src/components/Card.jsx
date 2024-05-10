import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BiCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

import { shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

import styles from "./Card.module.css";

function Card({ data }) {
	const { id, title, image, price } = data;

	const [state, dispatch] = useCart();

    const clickHandler = () => {
        dispatch({type: "add", payload: data})
    }

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
					<span> </span>
					<button type="button" onClick={clickHandler}>
						{" "}
						<BiCartAdd />{" "}
					</button>
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

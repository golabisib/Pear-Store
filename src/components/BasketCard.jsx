import PropTypes from "prop-types";

import { shortenText } from "../helpers/helper";

import { RiDeleteBinFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";

import styles from "./BasketCard.module.css"

function BasketCard({ data, clickHandler }) {
    const {image,title,quantity} = data;
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<p>{shortenText(data.title)}</p>
			<div className={styles.actions}>
				{quantity === 1 && (
					<button
						type="button"
						onClick={() => clickHandler("REMOVE_ITEM", data)}
					>
						<RiDeleteBinFill />{" "}
					</button>
				)}
				{quantity > 1 && (
					<button type="button" onClick={() => clickHandler("DECREASE", data)}>
						{" "}
						<FaMinus />{" "}
					</button>
				)}
				<span>{quantity}</span>
				<button type="button" onClick={() => clickHandler("INCREASE", data)}>
					<FaPlus />
				</button>
			</div>
		</div>
	);
}

BasketCard.propTypes = {
  clickHandler: PropTypes.func,
  data: PropTypes.shape({
    image: PropTypes.any,
    quantity: PropTypes.number,
    title: PropTypes.any
  })
}

export default BasketCard;

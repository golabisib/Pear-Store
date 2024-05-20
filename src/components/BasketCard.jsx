import { FaMinus, FaPlus } from "react-icons/fa";
import { decrease, increase, removeItem } from "../.features/cart/cartSlice";

import PropTypes from "prop-types";
import { RiDeleteBinFill } from "react-icons/ri";
import { shortenText } from "../helpers/helper";
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";

function BasketCard({ data }) {
  const { image, title, quantity } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(data.title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button type="button" onClick={() => dispatch(removeItem(data))}>
            <RiDeleteBinFill />{" "}
          </button>
        )}
        {quantity > 1 && (
          <button type="button" onClick={() => dispatch(decrease(data))}>
            {" "}
            <FaMinus />{" "}
          </button>
        )}
        <span>{quantity}</span>
        <button type="button" onClick={() => dispatch(increase(data))}>
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
    title: PropTypes.any,
  }),
};

export default BasketCard;

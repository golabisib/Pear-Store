import PropTypes from "prop-types";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { HiMiniHashtag } from "react-icons/hi2";

import styles from "./BasketSideBar.module.css";

function BasketSideBar({ state, clickHandler }) {
	return (
		<div className={styles.sideBar}>
			<div>
				<GoChecklist />
				<p>Total:</p>
				<span>{state.total}$</span>
			</div>
			<div>
				<HiMiniHashtag />
				<p>Quantity:</p>
				<span>{state.itemsCounter}</span>
			</div>
			<div>
				<BsFillPatchPlusFill />
				<p>status:</p>
				<span>{!state.checkout && "Pending..."}</span>
			</div>
			<button type="button" onClick={() => clickHandler("CHECKOUT")}>
				checkout
			</button>
		</div>
	);
}

BasketSideBar.propTypes = {
  clickHandler: PropTypes.func,
  state: PropTypes.shape({
    checkout: PropTypes.any,
    itemsCounter: PropTypes.any,
    quantity: PropTypes.any,
    total: PropTypes.any
  })
}

export default BasketSideBar;

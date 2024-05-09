import PropTypes from "prop-types";
import { BiListUl } from "react-icons/bi";
import { createQueryObject } from "../helpers/helper";
import { spread } from "axios";

import styles from "./SideBar.module.css";
import { categories } from "../constant/list";

function SideBar({ setQuery, query }) {
	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		if (tagName !== "LI") return;
		setQuery((query) => createQueryObject(query, { category }));
	};
	return (
		<div className={styles.sidebar}>
			<div>
				<div>
					<BiListUl />
					<p>categories</p>
				</div>
				<ul onClick={categoryHandler} {...spread}>
					{categories.map((item) => (
						<li
							key={item.id}
							className={
								item.type.toLocaleLowerCase() === query.category
									? styles.selected
									: null
							}
						>
							{item.type}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

SideBar.propTypes = {
	query: PropTypes.any,
	setQuery: PropTypes.func,
};

export default SideBar;

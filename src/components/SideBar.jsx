import PropTypes from "prop-types";
import { BiListUl } from "react-icons/bi";
import { createQueryObject } from "../helpers/helper";
import { spread } from "axios";

function SideBar({ setQuery }) {
	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		if (tagName !== "LI") return;
		setQuery((query) => createQueryObject(query, { category }));
	};
	return (
		<div>
			<div>
				<div>
					<BiListUl />
					<p>categories</p>
				</div>
				<ul onClick={categoryHandler} {...spread}>
					<li>All</li>
					<li>Electronics</li>
					<li>Jewelery</li>
					<li>Men's Clothing</li>
					<li>Women's Clothing</li>
				</ul>
			</div>
		</div>
	);
}

SideBar.propTypes = {
	setQuery: PropTypes.func,
};

export default SideBar;

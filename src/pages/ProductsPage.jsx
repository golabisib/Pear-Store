import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { BiListUl } from "react-icons/bi";
import { spread } from "axios";

import { useProducts } from "../context/ProductContext";
import { filterProducts, searchProducts } from "../helpers/helper";

import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";

function ProductsPage() {
	const products = useProducts();

	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState({});

	useEffect(() => {
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query, products]);

	const searchHandler = () => {
		setQuery((query) => ({ ...query, search }));
	};

	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		if (tagName !== "LI") return;
		setQuery((query) => ({ ...query, category }));
	};

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
				/>
				<button type="button" onClick={searchHandler}>
					<LuSearch />
				</button>
			</div>

			<div className={styles.container}>
				<div className={styles.products}>
					{!displayed.length && <Loader />}
					{displayed.map((product) => (
						<Card key={product.id} data={product} />
					))}
				</div>
				<div>
					<div>
						<BiListUl />
						<p>categories</p>
					</div>
					<ul onClick={categoryHandler} {...spread}>
						<li>All</li>
						<li>Electronics</li>
						<li>Jewellery</li>
						<li>Men's Clothing</li>
						<li>Women's Clothing</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ProductsPage;

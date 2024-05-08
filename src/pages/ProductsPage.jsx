import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { BiListUl } from "react-icons/bi";

import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { spread } from "axios";

function ProductsPage() {
	const products = useProducts();

    const [displayed, setDisplayed] = useState([])
	const [search, setSearch] = useState("");
	const searchHandler = () => {
		console.log("search");
	};

    useEffect( () => {
        setDisplayed(products);
    }, [products]);

	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();

		if (tagName !== "LI") return;
		console.log(category);
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
					<ul onClick={categoryHandler} {...spread} >
						<li>All</li>
						<li>Electronics</li>
						<li>Jewellery</li>
						<li>Men 's Clothing</li>
						<li>Women 's Clothing</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ProductsPage;

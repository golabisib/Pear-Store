import { useState } from "react";
import { LuSearch } from "react-icons/lu";

import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";

function ProductsPage() {
	const products = useProducts();

	const [search, setSearch] = useState("");
    const searchHandler = () => {
        console.log("search")
    }
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
					{!products.length && <Loader />}
					{products.map((product) => (
						<Card key={product.id} data={product} />
					))}
				</div>
				<div>SideBar</div>
			</div>
		</>
	);
}

export default ProductsPage;

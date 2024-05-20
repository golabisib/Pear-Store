import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// import { useProducts } from "../context/ProductContext";
import {
	filterProducts,
	getInitialQuery,
	searchProducts,
} from "../helpers/helper";

import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
	const products = [];

	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState({});

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setDisplayed(products);
	}, [products]);

    useEffect( () => {
        setQuery(getInitialQuery(searchParams));
    },[searchParams])

	useEffect(() => {
		setSearchParams(query);
		setSearch(query.search || "");
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query, products, setSearchParams]);

	return (
		<div className={styles.main}>
			<SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

			<div className={styles.container}>
				<div className={styles.products}>
					{!displayed.length && <Loader />}
					{displayed.map((product) => (
						<Card key={product.id} data={product} />
					))}
				</div>
				<SideBar setQuery={setQuery} query={query} />
			</div>
		</div>
	);
}
//201
export default ProductsPage;

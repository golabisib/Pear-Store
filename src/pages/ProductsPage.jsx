import { MagnifyingGlass } from "react-loader-spinner";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";

function ProductsPage() {
	const products = useProducts();
	console.log(products);

	return (
		<div className={styles.container}>
			<div className={styles.products}>
				{!products.length && (
					<p>
						{
							<MagnifyingGlass
								height="95px"
								width="95px"
								color="green"
								glassColor="white"
							/>
						}
					</p>
				)}

				{products.map((product) => (
					<product key={product.id}>{product.title}</product>
				))}
			</div>
			<div>SideBar</div>
		</div>
	);
}

export default ProductsPage;

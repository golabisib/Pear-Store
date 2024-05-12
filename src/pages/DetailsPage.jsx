import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";

import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css"

function DetailsPage() {
	const { id } = useParams();

	const productDetails = useProductDetails(+id);

	if (!productDetails) return <Loader />;

	return (
		<div className={styles.container}>
			<img src={productDetails.image} alt={productDetails.title} />
			<div className={styles.information}>
				<h3>{productDetails.title}</h3>
				<p className={styles.description}>{productDetails.description}</p>
				<p className={styles.category}>
					<BiSolidCategoryAlt /> {productDetails.category}
				</p>
				<div>
					<span className={styles.price}>
						<IoMdPricetag />
						{productDetails.price} $
					</span>
					<Link to="/products">
						<span>
							<BsArrowLeftShort /> Back to Shop
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default DetailsPage;

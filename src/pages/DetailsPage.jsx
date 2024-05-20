import { Link, useParams } from "react-router-dom";
//import { useProductDetails } from "../context/ProductContext";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";

import Loader from "../components/Loader";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../.features/product/productSlice";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(fetchProducts())
  },[dispatch])

  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );

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

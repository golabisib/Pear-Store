import {
    filterProducts,
    getInitialQuery,
    searchProducts,
} from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { fetchProducts } from "../.features/product/productSlice";
import styles from "./ProductsPage.module.css";
import { useSearchParams } from "react-router-dom";

// import { useProducts } from "../context/ProductContext";


function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  //   const products = [];

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
  }, [searchParams]);

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
          {loading && <Loader />}
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

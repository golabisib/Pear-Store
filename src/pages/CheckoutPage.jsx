import { TbMoodAnnoyed, TbMoodLookLeft } from "react-icons/tb";

import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { Link } from "react-router-dom";
import styles from "./CheckoutPage.module.css";
import { useSelector } from "react-redux";

// import { useCart } from "../context/CartContext";

function CheckoutPage() {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);


  if (!state.itemsCounter) {
    return (
      <div>
        <div className={styles.empty}>
          <TbMoodAnnoyed />
          <p> Your Basket is Empty or emty or emT or MT or </p>
        </div>
        <div className={styles.link}>
          <TbMoodLookLeft />
          <Link to="/products">Come with me for Shopping</Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;

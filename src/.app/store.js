import cartReducer from "../.features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../.features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;

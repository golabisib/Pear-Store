import { Navigate, Route, Routes } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
// import ProductProvider from "./context/ProductContext";
// import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";
import PageNotFound from "./pages/PageNotFound";
import ProductsPage from "./pages/ProductsPage";

function App() {
	return (

				<Layout>
					<Routes>
						<Route index element={<Navigate to="/products" />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/:id" element={<DetailsPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</Layout>
	);
}
//191
export default App;

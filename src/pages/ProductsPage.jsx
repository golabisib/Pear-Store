import { useProducts } from "../context/ProductContext"

function ProductsPage() {
    const products = useProducts();
    console.log(products)
  return (
    <div>
        Products Page
    </div>
  )
}

export default ProductsPage

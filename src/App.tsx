import { Route, Routes, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <h1>Online store</h1>
      <div>
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

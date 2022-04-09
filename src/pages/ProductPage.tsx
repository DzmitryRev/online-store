import { useLocation, useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Single Product</h1>
      <h3>{id}</h3>
    </div>
  );
}

export default ProductPage;

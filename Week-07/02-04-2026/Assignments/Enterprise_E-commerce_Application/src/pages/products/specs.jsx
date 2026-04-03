import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

export default function Specs() {
  const { productId } = useParams();
  const { productData } = useProduct();
  const product = productData[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="specs-section">
      <h3>Technical Specifications</h3>
      <div className="specs-grid">
        {Object.entries(product.specs).map(([key, value]) => (
          <div key={key} className="spec-item">
            <span className="spec-label">{key}:</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
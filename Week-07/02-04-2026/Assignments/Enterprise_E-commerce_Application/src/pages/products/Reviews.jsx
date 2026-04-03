import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

export default function Reviews() {
  const { productId } = useParams();
  const { productData } = useProduct();
  const product = productData[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h3>Customer Reviews ({product.reviews.length})</h3>
        <div className="average-rating">
          <span className="rating-stars">
            {"★".repeat(Math.floor(averageRating))}{"☆".repeat(5 - Math.floor(averageRating))}
          </span>
          <span className="rating-number">{averageRating.toFixed(1)} out of 5</span>
        </div>
      </div>

      <div className="reviews-list">
        {product.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <span className="review-user">{review.user}</span>
              <span className="review-rating">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
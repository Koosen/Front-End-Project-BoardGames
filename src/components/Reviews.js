import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import AdvancedSearch from "./AdvancedSearch";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { categories } = useParams()

  useEffect(() => {
    getReviews(categories).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [categories]);

  return (
    <section>
      <h2 className="ReviewTitle">Reviews</h2>
      <AdvancedSearch/>
      <section className="ReviewsSection">
      
      {reviews.map((review) => {
        return (
          <div
            className="ReviewCard"
            style={{ backgroundImage: `url(${review.review_img_url})` }}
          >
            <div className="ReviewCardContent">
              <h3 className="ReviewCardTitle">{review.title}</h3>
              <h4>{`by ${review.owner}`}</h4>
              <p className="ReviewCardBodyText">{review.review_body.split(" ").slice(0, 20).join(" ")}...</p>
                <Link className="ReviewCardButton" to={`Review/${review.review_id}`}>
                  <p>Read More</p>
                </Link>
                
            </div>
          </div>
        );
      })}
      </section>
    </section>
  );
}

export default Reviews;

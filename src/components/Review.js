import { useEffect, useState } from "react";
import { getReview } from "../utils/api";
import { Link, useParams } from "react-router-dom";

function Review() {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [review_id]);

  return (
    <section className="ReviewSection">
      <div className="ReviewSectionTitle">
        <h2>{review.title}</h2>
        <h3>
          by <span className="ReviewSection Author">{review.owner}</span>
        </h3>
      </div>
      <div className="ReviewSectionStats">
        <p>stats palceholder</p>
      </div>
      <div className="ReviewSectionBody">
        <p>body Placeholder</p>
      </div>
      <div className="ReviewSectionComments">
        <p>Comment Placeholder</p>
      </div>
    </section>
  );
}

export default Review;

// style={{"backgroundImage": url(`${}`)}}

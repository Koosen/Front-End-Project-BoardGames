import { useEffect, useState } from "react";
import { getComments, getReview } from "../utils/api";
import { useParams } from "react-router-dom";

function Review() {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [review_id]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <>
      <section className="ReviewSection">
        <div
          className="ReviewSectionTitleBar"
          style={{ backgroundImage: `url(${review.review_img_url})` }}
        >
          <h2>{review.title}</h2>
          <h3 className="ReviewSectionByAuthor">
            by <span className="ReviewSectionAuthor">{review.owner}</span>
          </h3>
        </div>
        <div className="ReviewSectionStats">
          <ul>
            <li>designer: {review.designer}</li>
            <li>category: {review.category}</li>
          </ul>
        </div>
        <div className="ReviewSectionBody">
          <p>{review.review_body}</p>
        </div>
        <div className="ReviewSectionLike">
          <button className="LikeButton">
            ({review.votes})<i class="fas fa-thumbs-up"></i>
          </button>
        </div>
      </section>
      <section className="ReviewSectionComments">
        {comments.map((comment) => {
          return (
            <section className="CommentCard">
              <h4>Comment by <span className="CommentAuthor">{comment.author}</span></h4>
              <p> {comment.body}</p>
              <button className="LikeButton">
                ({comment.votes})<i class="fas fa-thumbs-up"></i>
              </button>
            </section>
          );
        })}
        <section className="CommentCard">
          <form>
            <input type="text"></input>
            <button> <i class="fas fa-comment"></i></button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Review;

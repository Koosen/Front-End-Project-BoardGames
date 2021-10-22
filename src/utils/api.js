import axios from "axios";

const boardgamesApi = axios.create({
  baseURL: "https://boardgames-api-2021.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await boardgamesApi.get("/categories");
  return data.categories;
};

export const getReviews = async (categories) => {
  let path = "/reviews";
  const { data } = await boardgamesApi.get(path, {
    params: {
      category: categories,
    },
  });
  return data.reviews;
};

export const getReview = async (review_id) => {
  let path = `/reviews/${review_id}`;
  const { data } = await boardgamesApi.get(path);
  return data.review;
};

export const getComments = async (review_id) => {
  let path = `/reviews/${review_id}/comments`;
  const { data } = await boardgamesApi.get(path);
  return data.comments;
};

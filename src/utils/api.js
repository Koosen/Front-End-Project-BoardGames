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
  let path = "/review";
  const { data } = await boardgamesApi.get(path, {
    params: {
      review_id: review_id,
    },
  });
  return data.review;
};

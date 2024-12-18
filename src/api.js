import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-qfui.onrender.com/api",
});

const increaseVote = (articleId) => {
  return api.patch(`/articles/${articleId}`, { inc_votes: 1 });
};

const decreaseVote = (articleId) => {
  return api.patch(`/articles/${articleId}`, { inc_votes: -1 });
};

export { increaseVote, decreaseVote };

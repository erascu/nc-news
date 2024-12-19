import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-qfui.onrender.com/api",
});

const topicsFilter = (topic) => {
  return api.get(`/articles?topic=${topic}`);
}; //need to get fetched data...

const increaseVote = (articleId) => {
  return api.patch(`/articles/${articleId}`, { inc_votes: 1 });
};

const decreaseVote = (articleId) => {
  return api.patch(`/articles/${articleId}`, { inc_votes: -1 });
};

const postComment = (articleId, newComment) => {
  return api.post(`/articles/${articleId}/comments`, {
    username: "weegembump",
    body: `${newComment}`,
  });
};

const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};

export { increaseVote, decreaseVote, postComment, deleteComment, topicsFilter };

const Article = require('../models/Article');

const messages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
};

const HttpError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const ctrlWrapper = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

const getAllArticles = async (req, res) => {
  const result = await Article.find();
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const getArticle = async (req, res) => {
  const { id } = req.params;
  const result = await Article.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = {
  getAllArticles: ctrlWrapper(getAllArticles),
  getArticle: ctrlWrapper(getArticle),
};

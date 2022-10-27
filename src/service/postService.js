const { BlogPost, PostCategory } = require('../models');

const addPost = async (post) => {
  const createdPost = await BlogPost.create(post);

  createdPost.id = createdPost.null;

  return createdPost;
};

const addCategoryIds = async (categoryIds, postId) => {
  const arrToInsert = [];
  categoryIds.forEach((id) => arrToInsert.push({ postId, categoryId: id }));

  const result = await PostCategory.bulkCreate(arrToInsert);

  return result;
};

module.exports = { addPost, addCategoryIds };
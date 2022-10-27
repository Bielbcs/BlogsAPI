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

const getAll = async () => {
  const posts = await BlogPost.findAll({ include: [
    { association: 'user', attributes: { exclude: ['password'] } },
    { association: 'categories' },
  ] }); 

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { association: 'user', attributes: { exclude: ['password'] } },
      { association: 'categories' },
    ],
  });

  return post;
};

const editPost = async (id, body) => {
  const { title, content } = body;
  await BlogPost.update({ title, content }, { where: { id } });

  const post = await getById(id);

  return post;
};

module.exports = { addPost, addCategoryIds, getAll, getById, editPost };
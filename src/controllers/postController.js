const postService = require('../service/postService.js');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const post = await postService.addPost({ title, content, userId: 1 });
  
  await postService.addCategoryIds(categoryIds, post.id);

  return res.status(201).json(post);
};

const getAll = async (req, res) => {
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

const editPost = async (req, res) => {
  const { id } = req.params;

  const editedPost = await postService.editPost(id, req.body);

  return res.status(200).json(editedPost);
};

module.exports = { addPost, getAll, getById, editPost };
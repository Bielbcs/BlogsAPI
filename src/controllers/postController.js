const postService = require('../service/postService.js');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const post = await postService.addPost({ title, content, userId: 1 });
  
  await postService.addCategoryIds(categoryIds, post.id);

  return res.status(201).json(post);
};

module.exports = { addPost };
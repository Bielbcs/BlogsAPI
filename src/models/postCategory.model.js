module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('post_category', 
  {},
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  }
  );

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
    {
      as: 'categories',
      through: postCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });

    models.Category.belongsToMany(models.BlogPost,
    {
      as: 'blog_posts',
      through: postCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  }

  return postCategory;
}
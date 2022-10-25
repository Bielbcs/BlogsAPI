module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blog_post', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    underscored: true,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.user, {
      foreignKey: 'user_id',
    });
  }

  return BlogPost;
}
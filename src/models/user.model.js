module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.blog_post, {
      as: 'blog_posts',
      foreignKey: 'user_id',
    })
  }

  return User;
}
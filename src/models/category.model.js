module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories',
  });

  return Categorie;
}
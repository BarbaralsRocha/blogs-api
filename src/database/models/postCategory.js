const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
      { timestamps: false }
  );

  postCategoriesTable.associate = (models) => {

      models.BlogPost.belongsToMany(models.Category, {
          through: postCategoriesTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categories'
      });

      models.Category.belongsToMany(models.BlogPost, {
          through: postCategoriesTable,
          foreignKey: "categoryId",
          otherKey: "postId",
          as: 'post'
      });

  }

  return postCategoriesTable;
}

module.exports = postCategoriesSchema;


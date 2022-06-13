const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define("PostCategories", {},
      { timestamps: false, tableName: "PostCategories" }
  );

  postCategoriesTable.associate = (models) => {

      models.BlogPosts.belongsToMany(models.Categories, {
          through: postCategoriesTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categoryId'
      });

      models.Categories.belongsToMany(models.BlogPosts, {
          through: postCategoriesTable,
          foreignKey: "categoryId",
          otherKey: "postId",
          as: 'postId'
      });

  }

  return postCategoriesTable;
}

module.exports = postCategoriesSchema;


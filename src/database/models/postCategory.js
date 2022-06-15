const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
      { timestamps: false, tableName: "PostCategory" }
  );

  postCategoriesTable.associate = (models) => {

      models.BlogPost.belongsToMany(models.Category, {
          through: postCategoriesTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categoryId'
      });

      models.Category.belongsToMany(models.BlogPost, {
          through: postCategoriesTable,
          foreignKey: "categoryId",
          otherKey: "postId",
          as: 'postId'
      });

  }

  return postCategoriesTable;
}

module.exports = postCategoriesSchema;


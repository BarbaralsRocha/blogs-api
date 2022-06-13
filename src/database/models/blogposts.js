const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define("BlogPosts", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });
  return blogPostsTable;
}

blogPostsTable.associate = (models) => {
  blogPostsTable.belongsTo(models.User, { foreignKey: "userId", as: "user" });
}

module.exports = blogPostsSchema;
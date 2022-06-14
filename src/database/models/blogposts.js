const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define("BlogPosts", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });
  
  blogPostsTable.associate = (models) => {
    blogPostsTable.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
  
  return blogPostsTable;
}

module.exports = blogPostsSchema;
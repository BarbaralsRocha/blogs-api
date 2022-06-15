const blogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });
  
  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
  
  return BlogPostTable;
}

module.exports = blogPostsSchema;
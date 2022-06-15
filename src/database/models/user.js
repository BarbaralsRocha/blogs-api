const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, { timestamps: false });

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, { foreignKey: "userId", as: "blogPosts" });
  }
  
  return UsersTable;
}

module.exports = UsersSchema;

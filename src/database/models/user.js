const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("User", {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return UsersTable;
}

module.exports = UsersSchema;

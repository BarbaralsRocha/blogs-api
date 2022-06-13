const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define("Categories", {
    name: DataTypes.STRING
  });
  return categoriesTable;
}

module.exports = categoriesSchema;
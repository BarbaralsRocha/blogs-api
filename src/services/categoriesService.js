const { Category } = require('../database/models');

const createCategory = async ({
    name, 
}) => Category.create({
    name,
    });

const getCategories = () => Category.findAll();

module.exports = {
    createCategory,
    getCategories,
}; 
const categoriesService = require('../services/categoriesService');

const newCategory = async (req, res) => {
    const { name } = await categoriesService.createCategory(req.body);
    return res.status(201).json({ name });
};

const getCategories = async (req, res) => {
    const user = await categoriesService.getCategories(req.body);
    return res.status(200).json(user);
};

module.exports = {
    newCategory,
    getCategories,
};
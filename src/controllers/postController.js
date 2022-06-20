const postService = require('../services/postService');

// const newCategory = async (req, res) => {
//     const { name } = await postService.createCategory(req.body);
//     return res.status(201).json({ name });
// };

const getPosts = async (req, res) => {
    const user = await postService.getPosts(req.body);
    return res.status(200).json(user);
};

module.exports = {
    getPosts,
};
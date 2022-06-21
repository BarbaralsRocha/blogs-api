const postService = require('../services/postService');

const newPost = async (req, res) => {
    const post = await postService.createPost(req.body, res.locals.payload.id);
    return res.status(201).json(post);
};

const getPosts = async (_req, res) => {
    const user = await postService.getPosts();
    return res.status(200).json(user);
};

const getPostById = async (req, res) => {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
};

const updatePost = async (req, res) => {
    const post = await postService.updatePost(req.params.id, res.locals.payload.id, req.body);
    if (!post) return res.status(401).json({ message: 'Unauthorized user' });
    return res.status(200).json(post);
};

const deletePost = async (req, res) => {
    await postService.deletePost(req.params.id, res.locals.payload.id);
    return res.status(204).end();
};

const searchPost = async (req, res) => {
    const search = await postService.searchPost(req.query.q);
    console.log('SEARCH', search);
    return res.status(200).json(search);
};

module.exports = {
    getPosts,
    newPost,
    getPostById,
    updatePost,
    deletePost,
    searchPost,
};
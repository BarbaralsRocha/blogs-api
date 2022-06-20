const { BlogPost, Category, User, PostCategory } = require('../database/models');

const getPosts = () => BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

const createPost = async ({
    title, 
    content,
    categoryIds,
}, userId) => {
    const post = await BlogPost.create({
    title, 
    content,
    userId,
});
    await categoryIds.map(((category) => PostCategory.create({
    postId: post.null,
    categoryId: category,
})));
    return BlogPost.findByPk(post.null);
};

const getPostById = async (id) => {
    const posts = await getPosts(); 
    return posts.find((findId) => findId.dataValues.id === +id);
};

module.exports = {
    getPosts,
    createPost,
    getPostById,
}; 
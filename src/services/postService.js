const Sequelize = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../database/models');

const { Op } = Sequelize;
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

    await Promise.all(categoryIds.map(((category) => PostCategory.create({
    postId: post.null,
    categoryId: category,
}))));
    return BlogPost.findByPk(post.null);
};

const getPostById = async (id) => {
    const posts = await getPosts(); 
    return posts.find((findId) => findId.dataValues.id === +id);
};

const updatePost = async (postId, userId, { title, content }) => {
    console.log('usuario modificando', userId);
    const findPost = await BlogPost.findByPk(postId);
    console.log('findPost', findPost.dataValues.userId);
    if (findPost.dataValues.userId !== userId) {
        return false;
    }
    await BlogPost.update(
        {
            title, 
            content,
            userId,
        },
        {
            where: { id: postId },
        },
        );
    return getPostById(postId);
};

const deletePost = async (postId, userId) => {
    const findPost = await BlogPost.findByPk(postId);
    if (!findPost) {
        throw new Error(JSON.stringify({ status: 404, message: 'Post does not exist' }));
    }
    if (findPost.dataValues.userId !== userId) {
        throw new Error(JSON.stringify({ status: 401, message: 'Unauthorized user' }));
    }
    return BlogPost.destroy(
        {
            where: { id: postId },
        },
        );
};

const searchPost = async (q) => {
    const { rows } = await BlogPost.findAndCountAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
        where: {
            [Op.or]: [
                { title: { [Op.like]: `${q}%` } }, 
                { content: { [Op.like]: `${q}%` } },
            ],
        },
      });
    if (!q || q === '') return getPosts();
    if (!rows) return [];
    return rows;
};
module.exports = {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
    searchPost,
}; 
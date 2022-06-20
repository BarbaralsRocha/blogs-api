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
module.exports = {
    getPosts,
    createPost,
    getPostById,
    updatePost,
}; 
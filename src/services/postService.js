const { BlogPost, Category, User } = require('../database/models');

// const createUser = async ({
//     displayName, 
//     email,
//     password,
//     image,
// }) => User.create({
//     displayName, 
//     email,
//     password,
//     image,
//     });

const getPosts = () => BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

module.exports = {
    getPosts,
}; 
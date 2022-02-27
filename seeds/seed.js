const sequelize = require('../config/config');
const { User, Comment, Post } = require('../models');

const userData = require('./userData');
const commentData = require('./commentData');
const postData = require('./postData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const User = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const Comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const Post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
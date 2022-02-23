const sequelize = require('../config/config');
const { User, Comment, Post } = require('../models');

const userData = require('./userData');
const commentData = require('./commentData');
const postData = require('./postData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await User.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await User.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

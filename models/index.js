const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//What do we need to require for this document?
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});


module.exports = {
  User,
  Comment,
  Post
};